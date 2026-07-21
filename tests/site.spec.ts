import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/servicios",
  "/servicios/diagnostico-y-hoja-de-ruta",
  "/servicios/datos-y-analitica",
  "/servicios/automatizacion-y-agentes",
  "/servicios/asistentes-empresariales",
  "/metodologia",
  "/casos",
  "/casos/radarsecop",
  "/casos/observatorio-geih",
  "/nosotros",
  "/contacto",
  "/privacidad",
  "/en",
  "/en/services",
  "/en/services/ai-assessment-roadmap",
  "/en/services/data-analytics",
  "/en/services/process-automation",
  "/en/services/business-ai-assistants",
  "/en/methodology",
  "/en/cases",
  "/en/cases/radarsecop",
  "/en/cases/geih-observatory",
  "/en/about",
  "/en/contact",
  "/en/privacy",
];

test("las rutas principales responden y conservan un solo h1", async ({ page }) => {
  for (const route of routes) {
    const response = await page.goto(route);
    expect(response?.ok(), route).toBeTruthy();
    await expect(page.locator("h1")).toHaveCount(1);
  }
});

test("el inicio no produce desbordamiento horizontal", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});

test("el enlace de salto solo aparece con foco de teclado", async ({ page }) => {
  await page.goto("/");
  const skipLink = page.getByRole("link", { name: "Saltar al contenido" });
  await expect(skipLink).not.toBeInViewport();
  await page.keyboard.press("Tab");
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeInViewport();
});

test("las imágenes reales de los casos cargan al llegar a la sección", async ({ page }) => {
  await page.goto("/");
  await page.locator(".cases-section").scrollIntoViewIfNeeded();
  const images = page.locator(".case-card-image img");
  await expect(images).toHaveCount(3);
  await expect
    .poll(async () => images.evaluateAll((nodes) => nodes.every((node) => (node as HTMLImageElement).naturalWidth > 0)))
    .toBe(true);
});

test("el menú móvil comunica su estado y cierra con Escape", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Solo aplica al menú móvil");
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Abrir menú" });
  await trigger.click();
  const closeTrigger = page.getByRole("button", { name: "Cerrar menú" });
  await expect(closeTrigger).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation", { name: "Navegación móvil" })).toBeVisible();
  await page.keyboard.press("Escape");
  const reopenedTrigger = page.getByRole("button", { name: "Abrir menú" });
  await expect(reopenedTrigger).toHaveAttribute("aria-expanded", "false");
  await expect(reopenedTrigger).toBeFocused();
});

test("el formulario enlaza errores con sus campos", async ({ page }) => {
  await page.goto("/contacto");
  await page.getByRole("button", { name: "Solicitar diagnóstico" }).last().click();
  await expect(page.getByText("Revisa los campos indicados antes de continuar.")).toBeVisible();
  await expect(page.locator("#name")).toHaveAttribute("aria-invalid", "true");
  await expect(page.locator("#name")).toHaveAttribute("aria-describedby", "name-error");
});

test("la versión inglesa traduce navegación, contenido y formulario", async ({ page }) => {
  await page.goto("/en");
  await expect.poll(() => page.locator("html").getAttribute("lang")).toBe("en");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "We implement artificial intelligence",
  );
  await expect(page.locator(".hero-map")).toBeVisible();
  await expect(page.getByRole("link", { name: "Services", exact: true }).first()).toBeVisible();
  await page.goto("/en/contact");
  await page.getByRole("button", { name: "Request an assessment" }).click();
  await expect(page.getByText("Review the highlighted fields before continuing.")).toBeVisible();
});

test("el inicio presenta la oferta priorizada y la trayectoria verificable", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Antes de automatizar, entendemos tus datos." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Asistentes empresariales" })).toBeVisible();
  await expect(page.getByText("Estudios de posgrado en Gerencia de Proyectos")).toBeVisible();
  await expect(page.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/nicolas-alvarez-6864a0200/",
  );
});

test("el formulario breve retira ciudad y conserva el recorrido por WhatsApp", async ({ page }) => {
  await page.goto("/contacto");
  await expect(page.locator("#city")).toHaveCount(0);
  await expect(page.locator("#area option")).toHaveCount(7);
  await expect(page.locator("#process")).toHaveAttribute("maxlength", "400");
});

test("la portada inglesa no duplica el nombre de la marca en el título", async ({ page }) => {
  await page.goto("/en");
  await expect(page).toHaveTitle("AI consulting for small businesses | Aplicanza");
});

test("el sitio publica metadatos estructurados renderizados", async ({ page }) => {
  await page.goto("/");
  const schemas = await page.locator('script[type="application/ld+json"]').count();
  expect(schemas).toBeGreaterThan(0);
  await expect(page).toHaveTitle(/Aplicanza/);
});

test("el inicio y contacto no tienen fallos axe serios", async ({ page }) => {
  for (const route of ["/", "/contacto"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const important = results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );
    expect(important, `${route}: ${important.map((item) => item.id).join(", ")}`).toEqual([]);
  }
});

test("la experiencia sigue siendo legible con movimiento reducido", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.locator(".journey").scrollIntoViewIfNeeded();
  await expect(page.locator(".journey-step").first()).toHaveCSS("opacity", "1");
});

test("las tarjetas de valor no se solapan en anchos representativos", async ({ page }) => {
  const collisionReport: string[] = [];

  for (const width of [320, 768, 1024, 1100, 1200, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const overlaps = await page.locator(".loss-item").evaluateAll((nodes) => {
      const boxes = nodes.map((node) => node.getBoundingClientRect());
      const collisions: string[] = [];

      for (let first = 0; first < boxes.length; first += 1) {
        for (let second = first + 1; second < boxes.length; second += 1) {
          const a = boxes[first];
          const b = boxes[second];
          const intersects =
            a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;

          if (intersects) collisions.push(`${first + 1}-${second + 1}`);
        }
      }

      return collisions;
    });

    if (overlaps.length > 0) collisionReport.push(`${width}px: ${overlaps.join(", ")}`);
  }

  expect(collisionReport).toEqual([]);
});

test("las tarjetas de valor tienen dimensiones uniformes", async ({ page }) => {
  for (const width of [768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const dimensions = await page.locator(".loss-item").evaluateAll((nodes) =>
      nodes.map((node) => {
        const box = node.getBoundingClientRect();
        return { width: Math.round(box.width), height: Math.round(box.height) };
      }),
    );

    expect(new Set(dimensions.map((item) => item.width)).size, `${width}px: anchos`).toBe(1);
    expect(new Set(dimensions.map((item) => item.height)).size, `${width}px: altos`).toBe(1);
  }
});

test("la presentación de Nicolás usa su retrato y no menciona Nueva York", async ({ page }) => {
  await page.goto("/nosotros");
  const portrait = page.getByRole("img", { name: "Nicolás Álvarez, fundador de Aplicanza" });
  await expect(portrait).toBeVisible();
  await expect.poll(() => portrait.evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
  await expect(page.getByText(/Nueva York/i)).toHaveCount(0);
});

test("el inicio ofrece un acceso flotante a WhatsApp", async ({ page }) => {
  await page.goto("/");
  const whatsapp = page.getByRole("link", { name: "Hablar por WhatsApp" });
  await expect(whatsapp).toBeVisible();
  await expect(whatsapp).toHaveAttribute("href", /wa\.me\/573002968009/);
});

async function completeDiagnosticForm(page: import("@playwright/test").Page) {
  await page.locator("#name").fill("Persona de prueba");
  await page.locator("#company").fill("Empresa de prueba");
  await page.locator("#email").fill("persona@example.com");
  await page.locator("#area").selectOption("Tareas repetitivas");
  await page.locator("#process").fill("Queremos reducir el tiempo de elaboración de reportes internos.");
  await page.locator("#consent").check();
}

test("un correo enviado se confirma sin redirigir automáticamente a WhatsApp", async ({ page }) => {
  await page.route("**/api/contact", (route) =>
    route.fulfill({ contentType: "application/json", body: JSON.stringify({ ok: true }), status: 200 }),
  );
  await page.goto("/contacto");
  await completeDiagnosticForm(page);
  await page.getByRole("button", { name: "Solicitar diagnóstico" }).click();
  await expect(page.getByText("Solicitud enviada por correo correctamente.")).toBeVisible();
  await page.waitForTimeout(1600);
  await expect(page).toHaveURL(/\/contacto$/);
});

test("un fallo de correo permanece visible y no se oculta con una redirección", async ({ page }) => {
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      contentType: "application/json",
      body: JSON.stringify({ message: "El canal de correo aún no está configurado." }),
      status: 503,
    }),
  );
  await page.goto("/contacto");
  await completeDiagnosticForm(page);
  await page.getByRole("button", { name: "Solicitar diagnóstico" }).click();
  await expect(page.getByText("El canal de correo aún no está configurado.")).toBeVisible();
  await page.waitForTimeout(1600);
  await expect(page).toHaveURL(/\/contacto$/);
});

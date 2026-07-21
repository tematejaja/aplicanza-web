# Despliegue estático en Hostinger

Esta versión se publica en Hosting Compartido de Hostinger; no requiere Node.js ni variables de entorno en Hostinger.

## Antes de construir

1. Copie `.env.hostinger.example` como `.env.production` en la raíz del proyecto.
2. Cambie `https://TU-DOMINIO.COM` por el dominio definitivo, con `https://` y sin barra final.
3. Ejecute `powershell -ExecutionPolicy Bypass -File scripts/build-hostinger.ps1 -SiteUrl https://TU-DOMINIO.COM`.

## Publicación

1. En hPanel, abra **Administrador de archivos** y entre a `public_html`.
2. Suba `release/hostinger/aplicanza-hostinger-static.zip`.
3. Extraiga el ZIP directamente dentro de `public_html`; no deje una carpeta adicional entre `public_html` e `index.html`.
4. Abra el dominio y confirme que funcionan las rutas, el formulario y WhatsApp.

El formulario valida los datos y abre WhatsApp con el mensaje listo para enviar. El envío de correo con Resend requiere un hosting Node.js y se conserva fuera del paquete estático en `src/server/contact-handler.ts`.

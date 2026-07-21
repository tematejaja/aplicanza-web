import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { siteConfigEn } from "@/content/site-en";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Aplicanza handles information submitted through the contact form.",
  alternates: { canonical: "/en/privacy", languages: { "es-CO": "/privacidad", "en-US": "/en/privacy" } },
  robots: { index: true, follow: true },
};

export default function EnglishPrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Privacy" summary="We explain which information we receive, how we use it, and how you can request its deletion." title="Your information is used to respond to you." />
      <section className="privacy-section">
        <div className="shell privacy-copy">
          <article><h2>Controller</h2><p>Aplicanza is responsible for information submitted through this website. You can contact us at <a href={`mailto:${siteConfigEn.email}`}>{siteConfigEn.email}</a>.</p></article>
          <article><h2>Information we receive</h2><p>The form requests your name, company, email, main problem, and a description of the process you want to improve.</p></article>
          <article><h2>Purpose</h2><p>We use this information only to review your request, contact you, and prepare an initial conversation about Aplicanza&apos;s services.</p></article>
          <article><h2>Retention and providers</h2><p>The request may be delivered by email and WhatsApp through specialized providers for those channels. We do not sell or publish the information received.</p></article>
          <article><h2>Your choices</h2><p>You may request access, correction, or deletion by writing to the address above. We will respond after verifying that the request relates to your data.</p></article>
          <p className="privacy-update">Last updated: July 2026.</p>
        </div>
      </section>
    </>
  );
}

# MemoríQR — Validation MVP: align with detailed brief (final)

The project already ships a working first version (home, demo memorial, 4 routes, navy/gold tokens, Playfair+Inter, Reveal motion). This plan brings it fully in line with the detailed spec and the 4 approved refinements: extract reusable components, complete the home page, add a 4-step guided create flow, sharpen B2B segmentation, and make the success state human and premium. No backend, no auth, no payments, no fake "published" states.

## Design system (in place, confirm)
- Navy `#1B2A4A`, gold `#C9A84C`, white, soft gray `#F5F5F5` as semantic tokens in `src/styles.css`. No hardcoded colors in components.
- Playfair Display (`--font-display`) headings, Inter (`--font-sans`) body, via `@fontsource`.
- `Reveal` (motion) for subtle fade/rise. No new animation libraries.

## Reusable components (new — `src/components/`)
- `CTASection` — configurable closing call-to-action band (heading, subcopy, up to 3 buttons).
- `TrustCard`, `StepCard`, `PricingCard`, `Section` wrapper.
- `MemoryWall` — name + message form with session-only list.
- `MemorialGallery` — responsive image grid.
- Shared `InquiryForm` field primitives (zod + react-hook-form) reused by create / partner / contact forms.
- Keep existing `Navbar`, `Footer`, `Logo`, `SiteLayout`, `Reveal`.

## Navbar / Footer
- Navbar center links: **Inicio**, **Cómo funciona** (home anchor), **Para funerarias**, **Demo** (`/memorial/demo`). Right CTA **Crear memorial**, mobile hamburger sheet, sticky.
- Footer: brand, link columns, contact, social icons, copyright (align labels).

## Home `/` — complete section set
Keep hero, how-it-works, emotional band, trust, pricing, testimonials. Add/adjust:
- **Hero**: primary "Crear memorial", secondary "Ver demo", tertiary "Para funerarias".
- **Trust/value**: Privacidad, Permanencia, Acceso por QR, Acompañamiento humano (4 `TrustCard`s).
- **(Refinement 1) "Lo que recibe la familia"** — dedicated card group with 4 items: página memorial digital, placa QR / formato listo para QR, soporte de fotos / video / historia, acompañamiento y guía humana.
- **Para familias** section — emotional "why this matters".
- **(Refinement 2) Modelo de negocio — segmentación B2B/B2C**: a clear 3-column comparison section: **Familias**, **Funerarias**, **Cementerios / Marmolistas**, each with its own value framing (what they get / why it matters), making the business model explicit. Links into `/para-funerarias` for the partner columns.
- **Demo preview** card → `/memorial/demo`.
- **Pricing/positioning** — Memorial esencial "Desde", Memorial familiar "Personalizado", Plan para funerarias "Consultar" (no SaaS prices).
- **FAQ** (shadcn `Accordion`) — privacy, who can access, where the QR goes, photos/videos/messages, partners offering it. Also emit FAQPage JSON-LD.
- **Final CTA** (`CTASection`) — three paths: Crear memorial, Solicitar información, Ofrecer en mi funeraria.

## Demo memorial `/memorial/demo`
- Refactor memory wall → `MemoryWall`, gallery → `MemorialGallery`.
- Keep clear "demostración / no se guarda" framing, share section, QR preview.
- Verify og:title/description/image and self-referencing canonical/og:url.

## Create memorial `/crear-memorial` — 4 guided steps
Heading "Iniciar solicitud de memorial" (request, not checkout):
- **Paso 1 — Datos de la persona**: nombre completo, fechas, ciudad, biografía breve.
- **Paso 2 — Fotos y recuerdos**: retrato + galería con vista previa local (object URLs, no se suben), enlace de video opcional.
- **Paso 3 — Tipo de servicio**: Memorial esencial / Memorial familiar / Servicio para funeraria (selectable cards, premium positioning, no prices/checkout).
- **Paso 4 — Enviar solicitud**: nombre, email, teléfono/WhatsApp opcional, checkbox de consentimiento.
- Progress UI, zod + react-hook-form validation.
- **(Refinement 3) Success state — human + premium**, not generic: *"Solicitud recibida. Nuestro equipo revisará tu información y te contactará para acompañarte en el siguiente paso."* No payment, no fake publish.

## Partners `/para-funerarias`
- Hero "Ofrece un servicio diferencial a las familias".
- Why partners choose: placa QR física, página memorial digital, add-on premium, white-label futuro, menor fricción operativa.
- Business-model value + use cases (lápidas, tarjetas conmemorativas, urnas, rincones de recuerdo).
- Lead form: nombre, empresa, rol, email, teléfono, volumen mensual de memoriales, notas — lead capture only.
- CTAs: solicitar información de alianza / agendar conversación.

## Contact `/contacto`
- Warm intro, contact methods, inquiry form (nombre, email, asunto, mensaje), reassurance about response time. Honest confirmation, no persistence.

## SEO / meta — (Refinement 4) easy domain swap
- Each route keeps its own `head()` (title, description, og:title, og:description); og:image only on leaf routes (home + demo). og:type "website" sitewide, leaf-appropriate per page.
- **Centralize the base URL in one constant** (e.g. `SITE_URL` in `src/lib/seo.ts`) used to build every `canonical` and `og:url`. Defaults to `https://memori-qr.lovable.app` now; swapping to the final custom domain later is a single-line change. Canonical on leaf routes only; og:url self-references each page.

## Honesty guardrails (per brief)
- No fake checkout, no fake account, no "memorial publicado / en vivo" state. Forms confirm human follow-up; photo uploads are local previews only. Memory wall is session-only and labeled as demo.

## Out of scope (future backend phase)
Lovable Cloud auth, `memorials`/`messages` tables, real photo storage, auto-generated slugs + dynamic `/memorial/[slug]`, real-time memory wall, real Stripe. `/blog` deferred.

## Technical notes
- Deps already present: `motion`, `@fontsource/playfair-display`, `@fontsource/inter`, lucide, shadcn/ui. No new deps expected (reuse `accordion`, `progress`, `sonner`, `card`, `input`, `textarea`, `checkbox`, `radio-group`/`select`).
- Verify build + typecheck and spot-check responsive rendering after changes.

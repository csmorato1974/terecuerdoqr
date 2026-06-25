# MemoríQR — Validation MVP Build Plan

A premium, respectful, conversion-focused front-end for a digital memorial platform tied to physical QR plaques. **This is a validation MVP**: no auth, no database, no Stripe, no real persistence, and no *simulated* checkout/publishing. Forms are genuine lead/request capture UI that validate and show an honest "we'll contact you / request received" confirmation — they do not pretend to create accounts, charge cards, or publish a live memorial. All copy in Latin-American Spanish.

## Design system & foundations

- **Palette** (tokens in `src/styles.css`, oklch): navy `#1B2A4A` (primary), gold `#C9A84C` (accent), white `#FFFFFF`, soft gray `#F5F5F5` (muted surfaces). Mapped to semantic tokens; no hardcoded color utilities in components.
- **Typography**: install `@fontsource/playfair-display` (headings, `--font-display`) + `@fontsource/inter` (body, `--font-sans`); register in `@theme`. Generous line-height, large dignified headings.
- **Motion**: add `motion` (Framer Motion) — subtle only: gentle fade/rise-on-scroll, soft hero reveal. No bouncy or flashy effects.
- **Imagery**: tasteful Unsplash placeholders (soft nature, light, flowers, hands) — calm and dignified, never gloomy or clinical.
- Mobile-first and fully responsive (QR scans come from phones).

## Shared layout

- `Navbar`: logo left; center links (Inicio, Cómo funciona, Para funerarias, Contacto); "Crear memorial" CTA right; hamburger sheet on mobile.
- `Footer`: logo + tagline "Su historia, siempre viva.", link columns, social icons, "© MemoríQR 2026".
- Reusable `Section` / animated `Reveal` wrapper for consistent spacing and scroll motion.

## Routes (`src/routes/`)

1. **`/` (index.tsx) — Home: trust, emotional clarity, CTAs**
   - Hero: calm full-width image, "Su historia, siempre viva.", supporting subheadline, CTAs "Crear memorial" (→ `/crear-memorial`) and "Ver demo" (→ `/memorial/demo`).
   - How it works: 3 steps (Crea el perfil / Recibe la placa QR / Comparte el recuerdo).
   - **Trust sections** (core of this page): Privacidad (control de la familia, datos protegidos), Permanencia (el recuerdo perdura), Acceso por QR (escanear desde la placa), Acompañamiento/Soporte.
   - Planes with **premium positioning** — no low SaaS prices. Three tiers e.g. *Esencial — "Desde"*, *Familiar — "Personalizado"*, *Instituciones — "Consultar"*, each with value-focused feature lists and a "Solicitar" / "Consultar" CTA (routes to create/contact, no checkout).
   - Testimonials: 3 dignified placeholder family quotes.
   - Closing CTA band + footer.

2. **`/memorial/demo` (memorial.demo.tsx) — Dignified premium memorial**
   - Full-width cover photo with overlaid circular portrait.
   - Name, birth–death dates, hometown, short honorific line.
   - Biography / "Su historia" (placeholder, editorial typography).
   - Gallery: tasteful photo grid (calm, gallery-like — not a social feed).
   - One embedded video placeholder.
   - Memory Wall ("Mensajes de la familia y seres queridos"): name + message form; submitted messages appear in a list **in session state only** (clearly not persisted), respectful framing.
   - "Comparte este memorial": share buttons + QR image placeholder.
   - Per-route SEO `head()` (title, description, og:title, og:image).

3. **`/crear-memorial` (crear-memorial.tsx) — Guided memorial *request* flow (not payment)**
   - Multi-step guided form with progress indicator:
     - Step 1 — Sobre la persona: nombre, fechas, ciudad, breve biografía.
     - Step 2 — Recuerdos: profile photo + gallery photos with **instant local previews** (object URLs; not uploaded/stored), optional video URL.
     - Step 3 — Plan y contacto: choose a plan (premium positioning), enter contact details (nombre, email, teléfono). Final action is "Enviar solicitud" — honest confirmation that the MemoríQR team will reach out. **No payment step, no fake publish.**
   - zod + react-hook-form validation; success state is a real-feeling but truthful "solicitud recibida" screen.

4. **`/para-funerarias` (para-funerarias.tsx) — B2B for funerarias, cementerios, marmolistas**
   - Hero: "Ofrece un servicio diferencial a las familias."
   - Audience-specific value: funerarias, cementerios, marmolistas (placas grabadas con QR).
   - Benefits: placas QR por volumen, panel para gestionar memoriales, opción marca blanca, integración/API disponible, acompañamiento comercial.
   - Trust + partnership framing; CTA to partner contact form (name, empresa, tipo de negocio, teléfono, email, memoriales/mes estimados) — lead capture only.

5. **`/contacto` (contacto.tsx) — Contact**
   - Warm intro, contact form (nombre, email, asunto, mensaje), alternative contact details/placeholders, optional FAQ teasers (privacidad, permanencia, soporte). Validates; honest confirmation, no persistence.

## Routing & SEO notes

- Dynamic `/memorial/[slug]` is deferred (needs backend); the demo route represents the public memorial experience now.
- Every route defines its own `head()` (title, description, og:title, og:description); og:image only on leaf routes.

## Honesty guardrails (per user direction)

- No simulated checkout, no fake "memorial published / live" state, no fake account creation.
- Forms capture intent and confirm a human follow-up; photo "uploads" are local previews only.

## Explicitly out of scope (future backend phase)

Lovable Cloud auth, `memorials`/`messages` tables, real photo storage, auto-generated slugs + dynamic memorial pages, real-time Memory Wall, real Stripe payments.

## Technical details

- New deps: `motion`, `@fontsource/playfair-display`, `@fontsource/inter`.
- Reuse existing shadcn/ui components (button, card, input, textarea, sheet, progress, sonner, accordion for FAQ).
- QR placeholder via a public QR image URL or generated placeholder asset pointing at the demo URL.

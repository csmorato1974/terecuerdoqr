import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Infinity as InfinityIcon,
  QrCode,
  HeartHandshake,
  UserPlus,
  ScanLine,
  Share2,
  Quote,
  Check,
  ArrowRight,
  Globe,
  ImageIcon,
  Users,
  Building2,
  Landmark,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { canonicalUrl } from "@/lib/seo";
import coupleCemetery from "@/assets/couple-cemetery.webp.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TerecuerdoQR — Memoriales digitales con placa QR" },
      {
        name: "description",
        content:
          "Crea un homenaje digital premium para quien amas, accesible desde una placa QR en su lugar de descanso. Privado, permanente y lleno de su historia.",
      },
      { property: "og:title", content: "TerecuerdoQR — Su historia, siempre viva." },
      {
        property: "og:description",
        content:
          "Memoriales digitales premium conectados a una placa QR. Privacidad, permanencia y acompañamiento humano.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl("/") },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const steps = [
  {
    icon: UserPlus,
    title: "Creamos el memorial",
    text: "Reunimos fotos, video, biografía y los momentos que definieron su vida en una página digna y elegante.",
  },
  {
    icon: ScanLine,
    title: "Recibes la placa QR",
    text: "Una placa duradera, grabada con un código QR, lista para colocarse en la lápida o marcador.",
  },
  {
    icon: Share2,
    title: "Su historia se comparte",
    text: "Familia y visitantes escanean el código y acceden al recuerdo desde cualquier lugar, en cualquier momento.",
  },
];

const trust = [
  {
    icon: ShieldCheck,
    title: "Privacidad y control",
    text: "La familia decide qué se muestra y quién puede contribuir. Tu historia es tuya.",
  },
  {
    icon: InfinityIcon,
    title: "Permanencia",
    text: "Un recuerdo pensado para perdurar a través de las generaciones, no para desaparecer.",
  },
  {
    icon: QrCode,
    title: "Acceso por QR",
    text: "Un simple escaneo desde la placa conecta el lugar físico con la memoria viva.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento",
    text: "Te guiamos con sensibilidad en cada paso. Nunca estarás solo en el proceso.",
  },
];

const receives = [
  {
    icon: Globe,
    title: "Página memorial digital",
    text: "Un homenaje en línea, sobrio y elegante, con su historia, fotos y mensajes.",
  },
  {
    icon: QrCode,
    title: "Placa QR (o formato listo para QR)",
    text: "Una placa grabada para la lápida o marcador, o un código listo para integrar a la tuya.",
  },
  {
    icon: ImageIcon,
    title: "Fotos, video e historia",
    text: "Galería, biografía, línea de vida y un video conmemorativo opcional.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento humano",
    text: "Un equipo que te guía con sensibilidad para darle forma a cada detalle.",
  },
];

const segments = [
  {
    icon: Users,
    audience: "Familias",
    tagline: "Para quienes quieren preservar una vida.",
    points: [
      "Memorial digital privado y permanente",
      "Placa QR para el lugar de descanso",
      "Acompañamiento para reunir la historia",
    ],
    cta: { label: "Crear memorial", to: "/crear-memorial" as const },
  },
  {
    icon: Building2,
    audience: "Funerarias",
    tagline: "Un servicio diferencial para las familias.",
    points: [
      "Add-on premium para tus paquetes",
      "Panel para gestionar memoriales",
      "Opción de marca blanca a futuro",
    ],
    cta: { label: "Ver alianzas", to: "/para-funerarias" as const },
    highlight: true,
  },
  {
    icon: Landmark,
    audience: "Cementerios y marmolistas",
    tagline: "Convierte cada lápida en historia viva.",
    points: [
      "Placas QR grabadas por volumen",
      "Producto de alto valor agregado",
      "Integración a tus lápidas y procesos",
    ],
    cta: { label: "Ver alianzas", to: "/para-funerarias" as const },
  },
];

const plans = [
  {
    name: "Memorial esencial",
    price: "Desde",
    note: "Un homenaje digno y completo",
    features: [
      "Página memorial personalizada",
      "Galería de fotos y biografía",
      "Muro de mensajes para la familia",
      "Placa QR grabada incluida",
    ],
    cta: "Solicitar",
    to: "/crear-memorial" as const,
    highlight: false,
  },
  {
    name: "Memorial familiar",
    price: "Personalizado",
    note: "Para una historia con todos sus detalles",
    features: [
      "Todo lo del plan Esencial",
      "Video y línea de tiempo de su vida",
      "Diseño y curaduría dedicada",
      "Múltiples placas QR para la familia",
    ],
    cta: "Consultar",
    to: "/contacto" as const,
    highlight: true,
  },
  {
    name: "Plan para funerarias",
    price: "Consultar",
    note: "Cementerios, funerarias y marmolistas",
    features: [
      "Gestión de múltiples memoriales",
      "Placas QR por volumen",
      "Opción de marca blanca",
      "Acompañamiento comercial dedicado",
    ],
    cta: "Hablar con el equipo",
    to: "/para-funerarias" as const,
    highlight: false,
  },
];

const faqs = [
  {
    q: "¿Quién controla la privacidad del memorial?",
    a: "La familia. Ustedes deciden qué se muestra, qué historias se comparten y quién puede dejar mensajes. La privacidad y el respeto son la base de todo lo que hacemos.",
  },
  {
    q: "¿Quién puede acceder al memorial?",
    a: "Cualquier persona con el enlace o que escanee la placa QR puede ver el homenaje, salvo que la familia prefiera mantenerlo más reservado. Tú defines el nivel de apertura.",
  },
  {
    q: "¿Dónde se puede colocar la placa QR?",
    a: "En lápidas, marcadores, tarjetas conmemorativas, urnas o rincones de recuerdo en casa. El código conecta el objeto físico con la memoria digital.",
  },
  {
    q: "¿El memorial puede incluir fotos, videos y mensajes?",
    a: "Sí. Puedes incluir una galería de fotos, un video conmemorativo, la biografía, una línea de vida y un muro de mensajes para familiares y seres queridos.",
  },
  {
    q: "¿Las funerarias y cementerios pueden ofrecer el servicio?",
    a: "Sí. Contamos con planes para funerarias, cementerios y marmolistas, con placas por volumen, panel de gestión y opción de marca blanca.",
  },
];

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2000&q=80"
            alt="Campo sereno iluminado por una luz cálida"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/85" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary/30 px-4 py-1.5 text-xs font-medium tracking-wide text-gold">
              Memoriales digitales con placa QR
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-6xl">
              Su historia,
              <br />
              <span className="text-gold">siempre viva.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              Un homenaje digital sereno y duradero para quien amas, accesible
              con un simple escaneo desde su lugar de descanso.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gold text-gold-foreground hover:bg-gold/90"
              >
                <Link to="/crear-memorial">
                  Crear memorial <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/memorial/demo">Ver demo</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <Link
              to="/para-funerarias"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground/80 underline-offset-4 transition-colors hover:text-gold hover:underline"
            >
              ¿Eres funeraria, cementerio o marmolista? <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">Cómo funciona</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Tres pasos, hecho con cuidado
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nos encargamos de los detalles para que tú puedas concentrarte en recordar.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-lg">
                <span className="absolute right-6 top-6 font-display text-4xl font-semibold text-secondary">
                  0{i + 1}
                </span>
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What the family receives */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">Qué incluye</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Lo que recibe la familia
            </h2>
            <p className="mt-4 text-muted-foreground">
              Un homenaje completo, físico y digital, pensado para perdurar y para acompañarte.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {receives.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <r.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional band with image (for families) */}
      <section className="relative overflow-hidden">
        <img
          src={coupleCemetery.url}
          alt="Una pareja recuerda a un ser querido escaneando la placa QR de su lápida al atardecer"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Velo difuminado: fuerte tras el texto (izquierda), la foto nítida a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-5 py-28 md:py-36">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold tracking-widest text-gold uppercase">
                Para las familias
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Una vida no cabe en una fecha
              </h2>
              <p className="mt-5 leading-relaxed text-foreground/80">
                Detrás de cada nombre grabado hay risas, viajes, recetas, canciones
                y palabras que merecen recordarse. TerecuerdoQR convierte el lugar de
                descanso en una puerta hacia toda esa historia.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/80">
                Un espacio sobrio y bello, sin ruido, donde la memoria se cuida con
                la dignidad que merece.
              </p>
              <Button asChild className="mt-7 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/memorial/demo">
                  Ver un memorial de ejemplo <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>




      {/* Business model segmentation */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              Para quién es
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Un servicio para familias y aliados
            </h2>
            <p className="mt-4 text-muted-foreground">
              Acompañamos directamente a las familias y trabajamos con los profesionales
              que las atienden.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {segments.map((s, i) => (
              <Reveal key={s.audience} delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-2xl border bg-card p-8 ${
                    s.highlight ? "border-gold ring-1 ring-gold/40" : "border-border"
                  }`}
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <s.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    {s.audience}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
                  <ul className="mt-5 flex-1 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-7 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to={s.cta.to}>
                      {s.cta.label} <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">Confianza</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Construido sobre el respeto
          </h2>
          <p className="mt-4 text-muted-foreground">
            Honrar una vida exige seriedad. Estos son los principios que guían cada memorial.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <div className="flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <t.icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Demo preview */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm font-semibold tracking-widest text-gold uppercase">
                Una muestra
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Mira cómo se ve un memorial
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Recorre un ejemplo real: portada, retrato, biografía, galería, línea de
                vida y muro de recuerdos. Así de digno y sereno se verá el homenaje de
                tu ser querido.
              </p>
              <Button asChild className="mt-7 bg-gold text-gold-foreground hover:bg-gold/90">
                <Link to="/memorial/demo">
                  Ver el memorial de ejemplo <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/memorial/demo" className="group block">
              <Card className="overflow-hidden border-border p-0 shadow-lg transition-shadow group-hover:shadow-xl">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=1200&q=80"
                    alt="Portada serena de un memorial de ejemplo"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="-mt-10 px-6 pb-6">
                  <img
                    src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=200&q=80"
                    alt="Retrato del memorial de ejemplo"
                    className="size-20 rounded-full border-4 border-card object-cover shadow-md"
                  />
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                    Elena Martínez Rojas
                  </h3>
                  <p className="text-sm text-muted-foreground">1947 — 2024 · Popayán</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                    Ver memorial completo <ArrowRight className="size-4" />
                  </span>
                </div>
              </Card>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">Planes</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Un homenaje a la medida de su historia
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada vida es única. Conversamos contigo para definir el memorial que mejor la honra.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <Card
                className={`relative flex h-full flex-col p-8 ${
                  p.highlight
                    ? "border-gold bg-card shadow-xl ring-1 ring-gold/40"
                    : "border-border bg-card"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-semibold text-gold-foreground">
                    Más elegido
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
                <div className="mt-5">
                  <span className="font-display text-3xl font-semibold text-primary">
                    {p.price}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 ${
                    p.highlight
                      ? "bg-gold text-gold-foreground hover:bg-gold/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <Link to={p.to}>{p.cta}</Link>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            ¿No estás seguro de qué necesitas?{" "}
            <Link to="/contacto" className="font-medium text-gold hover:underline">
              Hablemos sin compromiso
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">Familias</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Recuerdos que siguen acompañando
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {[
              {
                quote:
                  "Escanear la placa y volver a ver sus fotos y palabras nos dio una paz que no esperábamos.",
                name: "Familia Restrepo",
                place: "Medellín",
              },
              {
                quote:
                  "Mis nietos podrán conocer quién fue su bisabuela. Eso, para mí, no tiene precio.",
                name: "Carmen V.",
                place: "Guadalajara",
              },
              {
                quote:
                  "Todo el proceso fue cuidadoso y humano. Nos acompañaron en un momento muy difícil.",
                name: "Familia Soto",
                place: "Santiago",
              },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                  <Quote className="size-8 text-gold/50" />
                  <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="font-semibold text-foreground">{t.name}</span>
                    <span className="text-muted-foreground"> — {t.place}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-24">
        <Reveal className="text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">Preguntas</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* Closing CTA */}
      <CTASection
        title="Comienza a preservar su historia"
        description="Da el primer paso hoy. Te acompañamos con sensibilidad, ya sea para tu familia o para tu negocio."
        actions={[
          { label: "Crear memorial", to: "/crear-memorial", variant: "gold" },
          { label: "Solicitar información", to: "/contacto", variant: "outline" },
          { label: "Ofrecer en mi funeraria", to: "/para-funerarias", variant: "outline" },
        ]}
      />
    </SiteLayout>
  );
}

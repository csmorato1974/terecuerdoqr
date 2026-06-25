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
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MemoríQR — Memoriales digitales con placa QR" },
      {
        name: "description",
        content:
          "Crea un homenaje digital premium para quien amas, accesible desde una placa QR en su lugar de descanso. Privado, permanente y lleno de su historia.",
      },
      { property: "og:title", content: "MemoríQR — Su historia, siempre viva." },
      {
        property: "og:description",
        content:
          "Memoriales digitales premium conectados a una placa QR. Privacidad, permanencia y acompañamiento humano.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
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

const plans = [
  {
    name: "Esencial",
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
    name: "Familiar",
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
    name: "Instituciones",
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

const testimonials = [
  {
    quote:
      "Escanear la placa y volver a escuchar su voz a través de sus fotos y palabras nos dio una paz que no esperábamos.",
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
                <Link to="/memorial/demo">Ver un memorial</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-24">
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

      {/* Emotional band with image */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1100&q=80"
                alt="Flores blancas delicadas iluminadas suavemente"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="text-sm font-semibold tracking-widest text-gold uppercase">
                Más que una lápida
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                Una vida no cabe en una fecha
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Detrás de cada nombre grabado hay risas, viajes, recetas, canciones
                y palabras que merecen recordarse. MemoríQR convierte el lugar de
                descanso en una puerta hacia toda esa historia.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
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

      {/* Pricing */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-24">
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
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">Familias</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Recuerdos que siguen acompañando
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
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
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-primary">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Comienza a preservar su historia
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Da el primer paso hoy. Te acompañamos con sensibilidad para crear un
              memorial a la altura de su vida.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
                <Link to="/crear-memorial">Crear memorial</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/contacto">Contactar al equipo</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

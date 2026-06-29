import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  MapPin,
  Heart,
  Play,
  Share2,
  QrCode,
  Flower2,
  Facebook,
  Link2,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { canonicalUrl } from "@/lib/seo";
import coverImage from "@/assets/cover.webp.asset.json";
import portraitImage from "@/assets/portrait.webp.asset.json";

export const Route = createFileRoute("/memorial/demo")({
  head: () => ({
    meta: [
      { title: "En memoria de Elena Martínez Rojas — TerecuerdoQR" },
      {
        name: "description",
        content:
          "Un homenaje a la vida de Elena Martínez Rojas (1947–2024). Su historia, fotografías y los mensajes de quienes la amaron.",
      },
      { property: "og:title", content: "En memoria de Elena Martínez Rojas" },
      {
        property: "og:description",
        content: "Un homenaje a una vida bien vivida. Su historia, siempre viva.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=1200&q=80",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: canonicalUrl("/memorial/demo") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/memorial/demo") }],
  }),
  component: MemorialDemo,
});

const gallery = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&fit=crop&w=700&q=80",
];

const timeline = [
  { year: "1947", text: "Nace en Popayán, una mañana de abril." },
  { year: "1969", text: "Se casa con Ramón, su compañero de toda la vida." },
  { year: "1972", text: "Llega su primera hija; serían tres en total." },
  { year: "1985", text: "Abre la panadería del barrio, su gran orgullo." },
  { year: "2010", text: "Disfruta de sus nietos y de su jardín de rosas." },
  { year: "2024", text: "Descansa rodeada de los suyos, dejando un legado de amor." },
];

interface Message {
  id: number;
  name: string;
  text: string;
}

function MemorialDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "Lucía, su nieta",
      text: "Abuela, gracias por cada domingo de pan caliente y cada consejo. Te llevo en cada cosa que hago.",
    },
    {
      id: 2,
      name: "Don Alberto",
      text: "Una vecina como pocas. Su sonrisa alegraba la cuadra entera. Descanse en paz.",
    },
  ]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      toast.error("Escribe tu nombre y tu mensaje.");
      return;
    }
    setMessages((m) => [{ id: Date.now(), name: name.trim(), text: text.trim() }, ...m]);
    setName("");
    setText("");
    toast.success("Gracias por tu mensaje", {
      description: "Aparece aquí durante tu visita (demostración, no se guarda).",
    });
  }

  function handleShare() {
    toast.success("Enlace listo para compartir", {
      description: "En un memorial real, aquí se copia el enlace público.",
    });
  }

  return (
    <SiteLayout>
      {/* Demo notice */}
      <div className="bg-gold/10 px-5 py-2.5 text-center text-xs font-medium text-foreground">
        Esta es una página de demostración. Así se verá un memorial real en TerecuerdoQR.
      </div>

      {/* Cover + portrait */}
      <section className="relative">
        <div className="h-64 w-full overflow-hidden sm:h-80 md:h-96">
          <img
            src={coverImage.url}
            alt="Páginas de libros antiguos con una rosa, fondo conmemorativo"
            className="h-full w-full object-cover"
          />
          
        </div>

        <div className="mx-auto max-w-4xl px-5">
          <div className="-mt-20 flex flex-col items-center text-center sm:-mt-24">
            <img
              src={portraitImage.url}
              alt="Retrato de Elena Martínez Rojas"
              className="size-36 rounded-full border-4 border-background object-cover shadow-xl sm:size-44"
            />
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-gold">
              <Flower2 className="size-4" /> En memoria
            </span>
            <h1 className="mt-2 font-display text-3xl font-semibold text-foreground sm:text-5xl">
              Elena Martínez Rojas
            </h1>
            <p className="mt-3 font-display text-lg text-muted-foreground">1947 — 2024</p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" /> Popayán, Colombia
            </p>
            <p className="mt-5 max-w-xl font-display text-lg italic text-foreground">
              “Madre, abuela y panadera del barrio. Quien la conoció, la recuerda con una sonrisa.”
            </p>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-foreground">Su historia</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Elena nació en Popayán en 1947, la mayor de cinco hermanos. Desde
              niña aprendió el oficio del pan junto a su madre, un arte que la
              acompañaría toda la vida y que convertiría en el corazón de su barrio.
            </p>
            <p>
              Se casó con Ramón en 1969 y juntos formaron una familia de tres hijas
              y, con los años, siete nietos. Su panadería abrió en 1985 y pronto se
              volvió punto de encuentro: allí se celebraban cumpleaños, se daban
              consejos y nunca faltaba un café para quien lo necesitara.
            </p>
            <p>
              Amaba su jardín de rosas, los boleros y las tardes largas de
              conversación. Partió en 2024 rodeada de los suyos, dejando un legado de
              generosidad, fe y amor incondicional.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Timeline */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-foreground">Línea de vida</h2>
          </Reveal>
          <div className="mt-8 space-y-6 border-l border-gold/30 pl-6">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-gold ring-4 ring-secondary" />
                  <p className="font-display text-lg font-semibold text-primary">{t.year}</p>
                  <p className="mt-1 text-muted-foreground">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-foreground">Galería</h2>
          <p className="mt-2 text-muted-foreground">Momentos que guardamos con cariño.</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 0.08}>
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`Recuerdo ${i + 1} de Elena`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-foreground">En movimiento</h2>
            <p className="mt-2 text-muted-foreground">Un video para recordarla tal como era.</p>
            <div className="group relative mt-8 aspect-video overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=1400&q=80"
                alt="Vista previa del video conmemorativo"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-primary/40">
                <span className="flex size-16 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg transition-transform group-hover:scale-110">
                  <Play className="ml-1 size-7" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Memory wall */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Muro de recuerdos
          </h2>
          <p className="mt-2 text-muted-foreground">
            Mensajes de la familia y de quienes la quisieron.
          </p>
        </Reveal>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-2xl border border-border bg-card p-6"
          >
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className="mb-3"
              aria-label="Tu nombre"
            />
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Comparte un recuerdo o una palabra de cariño…"
              rows={3}
              aria-label="Tu mensaje"
            />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Demostración: los mensajes no se guardan.
              </p>
              <Button type="submit" className="bg-gold text-gold-foreground hover:bg-gold/90">
                <Heart className="size-4" /> Dejar mensaje
              </Button>
            </div>
          </form>
        </Reveal>

        <div className="mt-8 space-y-4">
          {messages.map((m) => (
            <div key={m.id} className="rounded-2xl border border-border bg-card p-5">
              <p className="leading-relaxed text-foreground">“{m.text}”</p>
              <p className="mt-3 text-sm font-semibold text-gold">— {m.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Share + QR */}
      <section className="bg-primary">
        <div className="mx-auto max-w-4xl px-5 py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-primary-foreground">
                Comparte este memorial
              </h2>
              <p className="mt-3 text-primary-foreground/80">
                Cada placa TerecuerdoQR lleva un código único. Al escanearlo, familiares
                y visitantes llegan a esta página desde cualquier lugar del mundo.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  onClick={handleShare}
                  className="bg-gold text-gold-foreground hover:bg-gold/90"
                >
                  <Share2 className="size-4" /> Compartir
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Facebook className="size-4" /> Facebook
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link2 className="size-4" /> Copiar enlace
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mx-auto flex max-w-xs flex-col items-center rounded-2xl bg-background p-8 text-center">
                <div className="flex size-40 items-center justify-center rounded-xl border-2 border-dashed border-border text-muted-foreground">
                  <QrCode className="size-24" />
                </div>
                <p className="mt-4 text-sm font-medium text-foreground">Placa QR conmemorativa</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Vista de ejemplo del código grabado en la placa.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

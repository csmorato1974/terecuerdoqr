import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  Building2,
  Landmark,
  Hammer,
  TrendingUp,
  LayoutDashboard,
  Palette,
  Plug,
  Headphones,
  Check,
  ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { canonicalUrl } from "@/lib/seo";

export const Route = createFileRoute("/para-funerarias")({
  head: () => ({
    meta: [
      { title: "Para funerarias, cementerios y marmolistas — MemoríQR" },
      {
        name: "description",
        content:
          "Ofrece a las familias un servicio diferencial: memoriales digitales con placa QR. Placas por volumen, panel de gestión y marca blanca.",
      },
      { property: "og:title", content: "Alianzas profesionales — MemoríQR" },
      {
        property: "og:description",
        content:
          "Memoriales digitales con placa QR para funerarias, cementerios y marmolistas. Un servicio diferencial para las familias.",
      },
      { property: "og:url", content: canonicalUrl("/para-funerarias") },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/para-funerarias") }],
  }),
  component: ParaFunerarias,
});

const audiences = [
  {
    icon: Building2,
    title: "Funerarias",
    text: "Suma un servicio memorable a tus paquetes y acompaña a las familias más allá de la ceremonia.",
  },
  {
    icon: Landmark,
    title: "Cementerios",
    text: "Convierte cada lápida en una historia viva y moderniza la experiencia de visita.",
  },
  {
    icon: Hammer,
    title: "Marmolistas",
    text: "Integra placas QR grabadas a tus lápidas y diferénciate con un producto de alto valor.",
  },
];

const benefits = [
  { icon: TrendingUp, title: "Placas QR por volumen", text: "Precios preferenciales y producción a tu ritmo." },
  { icon: LayoutDashboard, title: "Panel de gestión", text: "Administra todos los memoriales desde un solo lugar." },
  { icon: Palette, title: "Marca blanca", text: "Ofrece el servicio con la identidad de tu empresa." },
  { icon: Plug, title: "Integración disponible", text: "Conecta TerecuerdoQR con tus procesos y sistemas." },
  { icon: Headphones, title: "Acompañamiento comercial", text: "Un equipo dedicado a tu crecimiento." },
  { icon: Check, title: "Capacitación incluida", text: "Tu equipo aprende a ofrecerlo con sensibilidad." },
];

function ParaFunerarias() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    type: "",
    email: "",
    phone: "",
    volume: "",
  });
  const [sent, setSent] = useState(false);

  function update(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.company.trim() || !form.name.trim() || !form.email.trim()) {
      toast.error("Completa empresa, nombre y correo para continuar.");
      return;
    }
    setSent(true);
    toast.success("Gracias por tu interés", {
      description: "Nuestro equipo de alianzas te contactará pronto.",
    });
  }

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">
          <Reveal>
            <span className="text-sm font-semibold tracking-widest text-gold uppercase">
              Alianzas profesionales
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold text-primary-foreground sm:text-5xl">
              Ofrece un servicio diferencial a las familias
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/80">
              Integra memoriales digitales con placa QR a tu oferta y entrega a cada
              familia algo que perdura: la historia de quien amaron, siempre viva.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-9 bg-gold text-gold-foreground hover:bg-gold/90"
            >
              <a href="#contacto-b2b">
                Solicitar información <ArrowRight className="size-4" />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Audiences */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Pensado para tu sector
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada aliado tiene una forma única de honrar a las familias. Nos adaptamos a la tuya.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-8">
                <div className="flex size-14 items-center justify-center rounded-xl bg-secondary text-primary">
                  <a.icon className="size-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">Beneficios</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Todo lo que necesitas para ofrecerlo
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.08}>
                <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <b.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contacto-b2b" className="mx-auto max-w-3xl px-5 py-24">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Conversemos sobre una alianza
          </h2>
          <p className="mt-4 text-muted-foreground">
            Déjanos tus datos y nuestro equipo de alianzas se pondrá en contacto contigo.
          </p>
        </Reveal>

        {sent ? (
          <Reveal>
            <div className="mt-10 rounded-2xl border border-gold/40 bg-gold/5 p-10 text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Check className="size-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                Solicitud enviada
              </h3>
              <p className="mt-3 text-muted-foreground">
                Gracias, {form.name}. Te contactaremos muy pronto para conversar sobre
                cómo trabajar juntos.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form
              onSubmit={submit}
              className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    placeholder="Nombre de tu empresa"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="bname">Tu nombre</Label>
                  <Input
                    id="bname"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Nombre y apellido"
                    className="mt-1.5"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="type">Tipo de negocio</Label>
                  <Input
                    id="type"
                    value={form.type}
                    onChange={(e) => update("type", e.target.value)}
                    placeholder="Funeraria, cementerio, marmolista…"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="volume">Memoriales estimados / mes</Label>
                  <Input
                    id="volume"
                    value={form.volume}
                    onChange={(e) => update("volume", e.target.value)}
                    placeholder="Ej. 10 a 30"
                    className="mt-1.5"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="bemail">Correo electrónico</Label>
                  <Input
                    id="bemail"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="contacto@empresa.com"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="bphone">Teléfono</Label>
                  <Input
                    id="bphone"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+57 300 000 0000"
                    className="mt-1.5"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
                Solicitar información
              </Button>
            </form>
          </Reveal>
        )}
      </section>
    </SiteLayout>
  );
}

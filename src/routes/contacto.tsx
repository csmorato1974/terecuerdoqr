import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Check, ShieldCheck, Infinity as InfinityIcon, Headphones } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { canonicalUrl } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — MemoríQR" },
      {
        name: "description",
        content:
          "¿Tienes preguntas sobre los memoriales digitales con placa QR? Escríbenos. Te acompañamos con sensibilidad y sin compromiso.",
      },
      { property: "og:title", content: "Contacto — MemoríQR" },
      {
        property: "og:description",
        content: "Estamos aquí para acompañarte. Escríbenos sin compromiso.",
      },
      { property: "og:url", content: canonicalUrl("/contacto") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/contacto") }],
  }),
  component: Contacto,
});

const faqs = [
  {
    icon: ShieldCheck,
    q: "¿Quién controla la información del memorial?",
    a: "La familia. Ustedes deciden qué se muestra, qué historias se comparten y quién puede dejar mensajes. La privacidad y el respeto son la base de todo lo que hacemos.",
  },
  {
    icon: InfinityIcon,
    q: "¿El memorial es permanente?",
    a: "Sí. TerecuerdoQR está pensado para perdurar a través de las generaciones. El objetivo es que el recuerdo siga vivo y accesible en el tiempo.",
  },
  {
    icon: Headphones,
    q: "¿Recibo acompañamiento para crearlo?",
    a: "Siempre. Nuestro equipo te guía con sensibilidad en cada paso, desde reunir las fotos hasta darle forma a la biografía. Nunca estarás solo en el proceso.",
  },
];

function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function update(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Completa tu nombre, correo y mensaje.");
      return;
    }
    setSent(true);
    toast.success("Mensaje enviado", { description: "Te responderemos muy pronto." });
  }

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-primary">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <Reveal>
            <span className="text-sm font-semibold tracking-widest text-gold uppercase">Contacto</span>
            <h1 className="mt-4 font-display text-4xl font-semibold text-primary-foreground sm:text-5xl">
              Estamos aquí para acompañarte
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
              Cuéntanos en qué podemos ayudarte. Respondemos con cuidado y sin compromiso.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            {sent ? (
              <Reveal>
                <div className="rounded-2xl border border-gold/40 bg-gold/5 p-10 text-center">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="size-7" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-foreground">
                    Gracias por escribirnos
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Hemos recibido tu mensaje, {form.name}. Te responderemos muy pronto.
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={submit} className="space-y-5 rounded-2xl border border-border bg-card p-8">
                  <div>
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Tu nombre"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="tucorreo@ejemplo.com"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      placeholder="¿Sobre qué quieres hablar?"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Escríbenos con confianza…"
                      rows={5}
                      className="mt-1.5"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
                    Enviar mensaje
                  </Button>
                </form>
              </Reveal>
            )}
          </div>

          {/* Contact details */}
          <div className="md:col-span-2">
            <Reveal>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Correo</p>
                    <p className="text-sm text-muted-foreground">hola@memoriqr.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <p className="text-sm text-muted-foreground">+57 300 000 0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Atención</p>
                    <p className="text-sm text-muted-foreground">
                      Lunes a viernes, 9:00 a 18:00 (hora local)
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* FAQ */}
        <Reveal className="mx-auto mt-20 max-w-2xl">
          <h2 className="text-center font-display text-3xl font-semibold text-foreground">
            Preguntas frecuentes
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium">
                  <span className="flex items-center gap-3">
                    <f.icon className="size-5 shrink-0 text-gold" />
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-8 text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

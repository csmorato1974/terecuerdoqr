import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Check, ArrowRight, ArrowLeft, ImagePlus, X, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { canonicalUrl } from "@/lib/seo";

export const Route = createFileRoute("/crear-memorial")({
  head: () => ({
    meta: [
      { title: "Iniciar solicitud de memorial — MemoríQR" },
      {
        name: "description",
        content:
          "Comienza el homenaje. Un proceso guiado y acompañado para reunir la historia, las fotos y los recuerdos de quien amas. Sin pagos ni compromisos.",
      },
      { property: "og:title", content: "Iniciar solicitud de memorial — MemoríQR" },
      {
        property: "og:description",
        content: "Un proceso guiado y acompañado para honrar una vida.",
      },
      { property: "og:url", content: canonicalUrl("/crear-memorial") },
    ],
    links: [{ rel: "canonical", href: canonicalUrl("/crear-memorial") }],
  }),
  component: CrearMemorial,
});

const stepLabels = ["Sobre la persona", "Fotos y recuerdos", "Tipo de servicio", "Enviar solicitud"];
const TOTAL_STEPS = stepLabels.length;

const planOptions = [
  { id: "esencial", name: "Memorial esencial", note: "Homenaje digno y completo", price: "Desde" },
  { id: "familiar", name: "Memorial familiar", note: "Con todos sus detalles", price: "Personalizado" },
  {
    id: "funeraria",
    name: "Servicio para funeraria / partner",
    note: "Soy un negocio o profesional del sector",
    price: "Consultar",
  },
];

function CrearMemorial() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Step 1
  const [fullName, setFullName] = useState("");
  const [birth, setBirth] = useState("");
  const [death, setDeath] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  // Step 2
  const [portrait, setPortrait] = useState<string | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  const [videoUrl, setVideoUrl] = useState("");

  // Step 3
  const [plan, setPlan] = useState("familiar");

  // Step 4
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  function next() {
    if (step === 1) {
      if (!fullName.trim() || !birth || !death) {
        toast.error("Completa el nombre y las fechas para continuar.");
        return;
      }
    }
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function onPortrait(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setPortrait(URL.createObjectURL(file));
  }

  function onPhotos(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    setPhotos((p) => [...p, ...files.map((f) => URL.createObjectURL(f))]);
  }

  function removePhoto(idx: number) {
    setPhotos((p) => p.filter((_, i) => i !== idx));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!contactName.trim() || !email.trim()) {
      toast.error("Necesitamos tu nombre y correo para acompañarte.");
      return;
    }
    if (!consent) {
      toast.error("Acepta el contacto para que podamos acompañarte.");
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <SiteLayout>
        <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 py-24 text-center">
          <Reveal>
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Check className="size-8" />
            </div>
            <h1 className="mt-6 font-display text-3xl font-semibold text-foreground">
              Solicitud recibida
            </h1>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Nuestro equipo revisará tu información y te contactará para acompañarte
              en el siguiente paso de la creación del memorial
              {fullName ? (
                <>
                  {" "}de <span className="font-medium text-foreground">{fullName}</span>
                </>
              ) : null}
              .
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              No se ha realizado ningún cobro ni se ha publicado nada todavía.
            </p>
            <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/">Volver al inicio</Link>
            </Button>
          </Reveal>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-2xl px-5 py-16">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-gold">
              <Sparkles className="size-4" /> Comienza el homenaje
            </span>
            <h1 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Iniciar solicitud de memorial
            </h1>
            <p className="mt-3 text-muted-foreground">
              Un proceso guiado y acompañado, sin pagos ni compromisos. Tómate tu
              tiempo: estamos aquí para ayudarte.
            </p>
          </div>
        </Reveal>

        {/* Progress */}
        <div className="mt-10">
          <div className="mb-3 flex flex-wrap justify-between gap-x-3 gap-y-1 text-xs font-medium">
            {stepLabels.map((label, i) => (
              <span
                key={label}
                className={i + 1 <= step ? "text-gold" : "text-muted-foreground"}
              >
                {i + 1}. {label}
              </span>
            ))}
          </div>
          <Progress value={(step / TOTAL_STEPS) * 100} className="h-1.5" />
        </div>

        <div className="mt-10">
          {step === 1 && (
            <Reveal className="space-y-5">
              <div>
                <Label htmlFor="fullName">Nombre completo</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. Elena Martínez Rojas"
                  className="mt-1.5"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="birth">Fecha de nacimiento</Label>
                  <Input
                    id="birth"
                    type="date"
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="death">Fecha de fallecimiento</Label>
                  <Input
                    id="death"
                    type="date"
                    value={death}
                    onChange={(e) => setDeath(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="city">Ciudad o lugar de origen</Label>
                <Input
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ej. Popayán, Colombia"
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="bio">Breve biografía</Label>
                <Textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Cuéntanos quién fue: lo que amaba, su carácter, lo que dejó en los demás…"
                  rows={5}
                  className="mt-1.5"
                />
                <p className="mt-1.5 text-xs text-muted-foreground">
                  No te preocupes por la redacción: nuestro equipo te ayuda a darle forma.
                </p>
              </div>
            </Reveal>
          )}

          {step === 2 && (
            <Reveal className="space-y-7">
              <div>
                <Label>Foto principal (retrato)</Label>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-full border border-dashed border-border bg-secondary">
                    {portrait ? (
                      <img src={portrait} alt="Retrato seleccionado" className="h-full w-full object-cover" />
                    ) : (
                      <ImagePlus className="size-6 text-muted-foreground" />
                    )}
                  </div>
                  <label className="cursor-pointer rounded-md border border-input px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                    Elegir foto
                    <input type="file" accept="image/*" className="hidden" onChange={onPortrait} />
                  </label>
                </div>
              </div>

              <div>
                <Label>Galería de fotos</Label>
                <div className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {photos.map((src, i) => (
                    <div key={src} className="group relative aspect-square overflow-hidden rounded-lg">
                      <img src={src} alt={`Foto ${i + 1}`} className="h-full w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        aria-label="Quitar foto"
                        className="absolute right-1 top-1 flex size-6 items-center justify-center rounded-full bg-primary/80 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <X className="size-3.5" />
                      </button>
                    </div>
                  ))}
                  <label className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-border bg-secondary text-muted-foreground transition-colors hover:text-foreground">
                    <ImagePlus className="size-5" />
                    <span className="text-xs">Agregar</span>
                    <input type="file" accept="image/*" multiple className="hidden" onChange={onPhotos} />
                  </label>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Las fotos se previsualizan en tu navegador; aún no se envían ni se guardan.
                </p>
              </div>

              <div>
                <Label htmlFor="video">Enlace de video (opcional)</Label>
                <Input
                  id="video"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="YouTube, Vimeo o un enlace que compartirás con nosotros"
                  className="mt-1.5"
                />
              </div>
            </Reveal>
          )}

          {step === 3 && (
            <Reveal className="space-y-4">
              <div>
                <Label className="mb-2 block">¿Qué tipo de servicio se acerca a lo que buscas?</Label>
                <div className="space-y-3">
                  {planOptions.map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => setPlan(p.id)}
                      className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-colors ${
                        plan === p.id
                          ? "border-gold bg-gold/5 ring-1 ring-gold/40"
                          : "border-border hover:border-gold/50"
                      }`}
                    >
                      <span>
                        <span className="block font-medium text-foreground">{p.name}</span>
                        <span className="block text-sm text-muted-foreground">{p.note}</span>
                      </span>
                      <span className="font-display text-sm font-semibold text-primary">
                        {p.price}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  No es un pago: definiremos juntos los detalles antes de cualquier cosa.
                </p>
              </div>
            </Reveal>
          )}

          {step === 4 && (
            <Reveal className="space-y-5">
              <p className="text-sm text-muted-foreground">
                Déjanos tus datos y nuestro equipo te contactará para acompañarte.
              </p>
              <div>
                <Label htmlFor="contactName">Tu nombre</Label>
                <Input
                  id="contactName"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="¿Cómo te llamas?"
                  className="mt-1.5"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono / WhatsApp (opcional)</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+57 300 000 0000"
                    className="mt-1.5"
                  />
                </div>
              </div>
              <label className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm">
                <Checkbox
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                  className="mt-0.5"
                  aria-label="Consentimiento de contacto"
                />
                <span className="text-muted-foreground">
                  Acepto que el equipo de MemoríQR me contacte sobre mi solicitud. Mis
                  datos se usarán únicamente para este fin.
                </span>
              </label>
            </Reveal>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-between">
          {step > 1 ? (
            <Button variant="ghost" onClick={back}>
              <ArrowLeft className="size-4" /> Atrás
            </Button>
          ) : (
            <span />
          )}

          {step < TOTAL_STEPS ? (
            <Button onClick={next} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Continuar <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button onClick={submit} className="bg-gold text-gold-foreground hover:bg-gold/90">
              Enviar solicitud <Check className="size-4" />
            </Button>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

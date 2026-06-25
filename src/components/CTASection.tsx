import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export interface CTAAction {
  label: string;
  to: string;
  variant?: "gold" | "outline";
}

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions: CTAAction[];
}

/**
 * Reusable closing call-to-action band on the deep navy background.
 * Supports up to three conversion paths.
 */
export function CTASection({ eyebrow, title, description, actions }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <Reveal>
          {eyebrow && (
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">{eyebrow}</p>
          )}
          <h2 className="mt-3 font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">{description}</p>
          )}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {actions.map((a) =>
              a.variant === "outline" ? (
                <Button
                  key={a.label}
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link to={a.to}>{a.label}</Link>
                </Button>
              ) : (
                <Button
                  key={a.label}
                  asChild
                  size="lg"
                  className="bg-gold text-gold-foreground hover:bg-gold/90"
                >
                  <Link to={a.to}>{a.label}</Link>
                </Button>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-baseline gap-0.5">
            <span className="font-display text-2xl font-semibold">Terecuerdo</span>
            <span className="font-display text-2xl font-semibold text-gold">QR</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
            Su historia, siempre viva.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Red social"
                className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-gold">Producto</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            <li><Link to="/memorial/demo" className="hover:text-primary-foreground">Ver memorial</Link></li>
            <li><Link to="/crear-memorial" className="hover:text-primary-foreground">Crear memorial</Link></li>
            <li><Link to="/para-funerarias" className="hover:text-primary-foreground">Para funerarias</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-gold">Compañía</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            <li><Link to="/contacto" className="hover:text-primary-foreground">Contacto</Link></li>
            <li><Link to="/para-funerarias" className="hover:text-primary-foreground">Alianzas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold text-gold">Confianza</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            <li>Privacidad y control familiar</li>
            <li>Permanencia del recuerdo</li>
            <li>Acompañamiento humano</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© 2026 TerecuerdoQR. Todos los derechos reservados.</p>
          <p>Hecho con cuidado para honrar cada historia.</p>
        </div>
      </div>
    </footer>
  );
}

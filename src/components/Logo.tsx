import { Link } from "@tanstack/react-router";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-baseline gap-0.5 ${className ?? ""}`}>
      <span className="font-display text-2xl font-semibold tracking-tight text-primary">
        Terecuerdo
      </span>
      <span className="font-display text-2xl font-semibold tracking-tight text-gold">QR</span>
    </Link>
  );
}

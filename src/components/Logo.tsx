import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png.asset.json";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className ?? ""}`} aria-label="TerecuerdoQR">
      <img
        src={logoAsset.url}
        alt="TerecuerdoQR"
        className="h-16 w-auto sm:h-20"
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}

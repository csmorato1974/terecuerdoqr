## Objetivo

Reemplazar **las dos imágenes** del memorial de demostración (`src/routes/memorial/demo.tsx`) usando la imagen subida, que es un montaje con el fondo de portada (libros antiguos + rosa) y el retrato circular (señora con la taza). No se modifica ningún texto ni dato de la ficha (nombre, fechas, lugar, biografía, línea de vida, galería, mensajes, etc.).

## Cambios

1. **Preparar las imágenes** (optimizadas a WebP, sin pérdida visual apreciable):
   - `cover.webp` → la imagen completa subida, usada como fondo de la portada.
   - `portrait.webp` → recorte de la zona del retrato circular (la señora sonriendo con la taza), centrado, para el círculo del retrato.
   - Subir ambas al CDN como assets (`src/assets/cover.webp.asset.json` y `src/assets/portrait.webp.asset.json`).

2. **Actualizar `src/routes/memorial.demo.tsx`** (sección "Cover + portrait"):
   - Reemplazar el `src` del `<img>` de portada (actualmente la foto de Unsplash del atardecer) por `cover.webp`.
   - Reemplazar el `src` del `<img>` del retrato circular (actualmente la foto de Unsplash) por `portrait.webp`.
   - Actualizar el `alt` de ambas imágenes de forma descriptiva en español.
   - Mantener intactos el degradado, el tamaño/forma del círculo, el nombre, las fechas, el lugar y todo el resto de la página.

```text
┌──────────── Cover (cover.webp) ────────────┐
│   fondo libros antiguos + rosa             │
│            ● retrato circular              │
│            (portrait.webp)                 │
│         Elena Martínez Rojas               │
│            1947 — 2024                      │
└────────────────────────────────────────────┘
```

## Notas técnicas

- Las imágenes se referencian vía pointer `.asset.json` importado en el archivo de ruta.
- `og:image` del head se deja como está salvo que se solicite cambiarlo (es una URL de Unsplash); puedo actualizarlo a la nueva portada si lo prefieres.
- No se tocan datos ni textos del demo, solo las dos fuentes de imagen.

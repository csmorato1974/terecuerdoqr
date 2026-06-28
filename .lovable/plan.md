## Objetivo

Agregar la imagen de la pareja en el cementerio (escaneando la placa QR al atardecer) a la sección "Para las familias" de la página de inicio, que actualmente es solo texto centrado.

## Cambios

1. **Subir la imagen al CDN**: optimizarla a WebP (sin pérdida visual apreciable) y crear el asset `couple-cemetery.webp` en `src/assets/`.

2. **Reestructurar la sección "Para las familias"** (`src/routes/index.tsx`, sección 4):
   - Volver a un diseño de dos columnas en escritorio (`md:grid-cols-2`), con la imagen a un lado y el texto al otro.
   - Imagen con esquinas redondeadas, `object-cover`, `loading="lazy"` y `decoding="async"` para carga rápida.
   - Mantener el texto actual (encabezado, párrafos y botón "Ver un memorial de ejemplo").
   - En móvil se apila la imagen sobre el texto.

```text
┌─────────────── Para las familias ───────────────┐
│  ┌───────────────┐   PARA LAS FAMILIAS          │
│  │   imagen       │   Una vida no cabe...         │
│  │  (pareja en    │   párrafos + botón            │
│  │   cementerio)  │                               │
│  └───────────────┘                               │
└──────────────────────────────────────────────────┘
```

## Notas técnicas

- La imagen se referencia vía pointer `.asset.json` importado en `index.tsx`.
- `alt` descriptivo en español acorde al tono del sitio.

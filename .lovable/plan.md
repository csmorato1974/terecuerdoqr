## Objetivo

En la página del memorial de demostración (`/memorial/demo`) reemplazar **dos** imágenes por la imagen subida:
1. La **imagen de portada** (cabecera) → el fondo de páginas de libros antiguos con la rosa.
2. El **retrato circular** → la foto de la señora mayor con el café que aparece en la imagen subida.

## Cambios

1. **Preparar las imágenes y subirlas al CDN**:
   - **Portada**: usar la imagen subida completa (páginas/rosa), optimizada a WebP, como asset en `src/assets/`.
   - **Retrato**: recortar la zona del círculo con la señora mayor de la imagen subida y exportarla cuadrada (centrada), optimizada a WebP, como segundo asset en `src/assets/`.
   - Ambas como pointers `.asset.json`.

2. **Reemplazar en `src/routes/memorial.demo.tsx`** (sección "Cover + portrait"):
   - Cambiar el `src` del `<img>` de cabecera (foto Unsplash del cielo) por el asset de portada.
   - Cambiar el `src` del `<img>` del retrato circular por el asset de retrato.
   - Mantener intacto todo lo demás (degradado, nombre, fechas, ubicación, cita y resto de la página).
   - Actualizar el texto `alt` de ambas imágenes acorde a las nuevas fotos.

```text
┌──────── Memorial demo ────────┐
│   [NUEVA portada: libros+rosa] │  ← reemplazada
│        (degradado)             │
│      ( NUEVO retrato señora )  │  ← reemplazado
│      Elena Martínez Rojas      │
└────────────────────────────────┘
```

## Notas técnicas

- Ambas imágenes se referencian vía pointer `.asset.json` importado en `memorial.demo.tsx`.
- No se modifica la `og:image` ni otras secciones salvo que lo pidas.

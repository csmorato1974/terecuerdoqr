## Problema

La imagen de portada (`cover.webp`) es el montaje original subido, que **ya incluye** el retrato circular de la señora incrustado en el centro-inferior. Encima de esa portada se muestra además el retrato circular superpuesto (`portrait.webp`). Resultado: la modelo aparece **dos veces**.

## Objetivo

Que solo quede **una** fotografía circular de la modelo (el retrato superpuesto), eliminando el círculo duplicado que viene incrustado dentro del fondo de portada.

## Cambios

1. **Generar una portada limpia (sin el retrato incrustado):**
   - Editar la imagen de portada para **eliminar el círculo de la señora** que está incrustado en el centro-inferior, rellenando esa zona con el fondo de libros antiguos / rosa para que quede continuo y natural.
   - Optimizar a WebP y subir como nuevo asset (`cover.webp` actualizado).

2. **Actualizar `src/routes/memorial.demo.tsx`:**
   - Apuntar el `<img>` de portada al nuevo asset de portada limpia.
   - Mantener intacto el retrato circular superpuesto (`portrait.webp`) — ese es el único que debe quedar visible.
   - No se modifica ningún texto ni dato de la ficha del demo.

```text
Antes:  fondo + círculo incrustado  +  círculo superpuesto   → DUPLICADO
Después: fondo limpio (sin círculo)  +  círculo superpuesto   → solo UNO
```

## Notas técnicas

- La edición del fondo se hará con la herramienta de edición de imágenes (relleno de la zona del círculo con el fondo de papeles/rosa).
- Se revisará el resultado antes de subirlo para confirmar que no quedan restos del círculo incrustado.

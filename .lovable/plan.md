# Reemplazar el logo en toda la web

Subo el nuevo logo (`LOGO_SIN_FONDO-2.png`) como asset CDN y lo uso como fuente única para todos los sitios donde aparece la marca.

## Cambios

1. **Nuevo asset**: subir el archivo con `lovable-assets` y generar `src/assets/logo.png.asset.json` (sobrescribiendo el pointer actual, mismo path, así todos los imports existentes toman el nuevo logo automáticamente).

2. **Navbar** (`src/components/Logo.tsx`): ya consume `logo.png.asset.json` → queda actualizado sin tocar código. Presente en todas las páginas vía `Navbar`.

3. **Footer** (`src/components/Footer.tsx`): ya usa el mismo asset dentro de una "chip" clara (`bg-background/95`) para que el logo oscuro/dorado sea visible sobre el fondo navy. Se mantiene esa chip para asegurar visibilidad del nuevo logo (que también es navy + dorado sobre transparente).

4. **Favicon y apple-touch-icon** (`src/routes/__root.tsx`): ya apuntan al mismo asset → se actualizan solos.

## Notas

- Como el logo es horizontal (wordmark ancho), mantengo las alturas actuales (`h-8`/`h-9` navbar, `h-10` footer) y `w-auto` para que escale bien en móvil y desktop sin deformarse.
- No se toca ningún texto ni copy.
- El asset viejo se reemplaza en el mismo pointer, por lo que no queda logo antiguo colgado en ninguna sección.

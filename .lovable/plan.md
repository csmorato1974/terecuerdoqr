## Problema

Sobre la foto de portada hay una capa de degradado semitransparente (`bg-gradient-to-t from-background/60`) que la opaca y le da aspecto "empañado". El usuario quiere ver la foto más nítida.

## Cambios

En `src/routes/memorial.demo.tsx`, sección "Cover + portrait":

- **Quitar (o reducir al mínimo) la capa de degradado** que cubre la imagen de portada, para que la fotografía se vea limpia y nítida.
- Mantener el retrato circular, el nombre "Elena Martínez Rojas", las fechas (1947 — 2024) y el resto del texto exactamente igual; esos textos están debajo de la imagen, sobre el fondo normal de la página, así que se mantienen legibles sin la capa opaca.
- No se cambian datos ni otras secciones.

## Nota

Si al quitar el degradado por completo la zona inferior de la foto compite visualmente con el retrato circular, se puede dejar un degradado muy sutil solo en el borde inferior; de lo contrario se elimina del todo para máxima nitidez.

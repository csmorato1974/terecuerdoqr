## Objetivo

En la sección **"Para las familias / Una vida no cabe en una fecha"** (en `src/routes/index.tsx`, líneas 373–412), la fotografía de la pareja en el cementerio debe cobrar más relevancia: ocupar mucho más ancho de la página y servir como fondo atmosférico, no como una imagen enmarcada en una columna. Al mismo tiempo, debe quedar atenuada/difuminada con discreción para que el texto siga siendo el protagonista.

## Cambios

Reescribir el bloque de esa sección para pasar de un layout de dos columnas (imagen enmarcada + texto) a una **banda a todo ancho con la foto de fondo**:

- **Imagen de fondo grande**: `couple-cemetery.webp` pasa a ser una capa `absolute inset-0` que cubre toda la sección (`object-cover`), de modo que ocupe prácticamente todo el ancho y alto de la banda. Se mantiene la misma foto (se nota que es un cementerio, atardecer, etc.).
- **Atenuación discreta (fade)**: sobre la imagen se coloca un velo con un degradado usando tokens del sistema (p. ej. `bg-gradient-to-r` desde `background` casi opaco hacia un lado, más translúcido del otro) y un ligero desenfoque. Así la foto se percibe pero queda "difuminada con relativa discreción", sin marco lineal duro.
- **El texto manda**: el bloque de texto (eyebrow "Para las familias", título "Una vida no cabe en una fecha", los dos párrafos y el botón "Ver un memorial de ejemplo") se coloca **encima** de la imagen, en una caja legible (con suficiente contraste gracias al velo), alineado a un lado para no competir con el centro de la foto.
- **Sin marco rígido**: se elimina el contenedor `rounded-3xl` que enmarcaba la foto en su columna; la sección se vuelve `relative overflow-hidden` a todo el ancho disponible (manteniendo el padding interno para el contenido).
- Se conservan los colores de marca (navy/gold), las animaciones `Reveal`, el `alt` de la imagen para accesibilidad y el `loading="lazy"`.

## Detalle técnico

```text
<section relative overflow-hidden>
  <img absolute inset-0 object-cover />        ← foto grande de fondo
  <div absolute inset-0 velo degradado + blur> ← fade discreto
  <div relative ... contenido>                 ← texto + botón por encima
    eyebrow / h2 / 2 párrafos / botón
  </div>
</section>
```

- El velo se construye con tokens semánticos (`--background`, `--primary`) y opacidades, nunca con colores fijos, para respetar el modo claro/oscuro.
- Se ajustará la altura mínima de la banda (p. ej. `min-h`) para que la foto tenga presencia sin empujar de más el resto de la página.
- Solo se modifica este bloque; ninguna otra sección, dato ni componente cambia.

## Nota

Si al difuminar la foto el texto pierde legibilidad en algún punto, se reforzará el velo solo detrás del texto (no en toda la imagen) para mantener la foto visible y el texto nítido.

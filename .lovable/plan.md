# Música de fondo para la demo

Añadir una pista musical suave y emotiva a `/memorial/demo`, con un control flotante minimalista de play/pausa. La música **no** se reproduce sola: arranca solo cuando el visitante pulsa el botón (esto también cumple las reglas de los navegadores, que bloquean el audio automático).

## Qué se va a hacer

1. **Generar la pista musical**
   - Crear una composición instrumental original con ElevenLabs Music: piano y cuerdas cálidas, tempo lento-medio, tono sereno y luminoso — emotivo pero no triste, delicado pero no festivo. Aprox. 60–90 s, pensada para repetirse en bucle sin cortes bruscos.
   - Guardar el audio como asset del proyecto (`src/assets/memorial-ambience.mp3.asset.json`) servido desde el CDN.
   - Requiere que ElevenLabs esté conectado al proyecto; si no lo está, se conecta antes de generar.

2. **Control de reproducción (botón flotante "solo play/pausa")**
   - Botón circular fijo en la esquina inferior derecha, discreto y acorde a la estética cálida (tono `gold`, sombra suave, ícono de nota/volumen).
   - Estado inicial: pausado. Al pulsar, suena la música en bucle; al pulsar de nuevo, se pausa.
   - El ícono cambia entre play y pausa. Volumen fijado en un nivel suave de fondo (~35%).
   - Accesible: `aria-label` y `aria-pressed`.

3. **Integración en la página**
   - El control vive solo en la ruta de demo (`src/routes/memorial.demo.tsx`), no en el resto del sitio.
   - El audio se monta sin reproducirse hasta la interacción, sin afectar el rendimiento de carga.

## Detalles técnicos

```text
src/assets/memorial-ambience.mp3.asset.json   (nuevo, pista generada vía CDN)
src/components/AmbientAudioToggle.tsx          (nuevo, botón + <audio loop>)
src/routes/memorial.demo.tsx                   (montar <AmbientAudioToggle />)
```

- `AmbientAudioToggle` usa un `<audio loop preload="none">` con `useRef`, y un estado `playing` que alterna `play()`/`pause()`.
- Sin autoplay → sin warnings de navegador ni sorpresas para el visitante.
- La música es un instrumental original generado, sin problemas de derechos.

## Notas
- El estilo del botón reutiliza los tokens existentes (`gold`, `background`, sombras) para mantener la coherencia con el rediseño emocional ya aplicado.
- Si prefieres más adelante varias pistas seleccionables (para las plantillas que mencionaste), esto deja la base lista para ampliarlo.
# Aplicar el nuevo logo en toda la web

El `Navbar` ya usa el componente `<Logo />` con la nueva imagen, así que aparece en todas las páginas (inicio, para funerarias, crear memorial, contacto, memorial demo). Faltan dos lugares donde todavía se usa la marca antigua en formato texto.

## Cambios

1. **Footer (`src/components/Footer.tsx`)**  
   Reemplazar el wordmark de texto (`"Terecuerdo" + "QR"`) por la imagen del logo (`src/assets/logo.png.asset.json`). Como el footer tiene fondo oscuro (`bg-primary`) y el logo es de trazo oscuro sobre transparente, se renderiza dentro de una pequeña "chip" con fondo claro (`bg-background/95`, esquinas redondeadas, padding) para asegurar legibilidad. Altura ~`h-10`.

2. **Favicon (`src/routes/__root.tsx`)**  
   Añadir en el `head()` un `<link rel="icon" type="image/png" href={logoAsset.url}>` y `apple-touch-icon` apuntando al mismo asset para que la pestaña del navegador y el ícono en móviles también usen el nuevo logo.

## Notas

- No se toca el navbar ni las landings porque ya consumen `<Logo />`.
- No se modifica el asset ni ningún texto/copy de la web.
- Si prefieres el logo del footer sin la chip clara (mostrado directamente sobre el fondo oscuro, aceptando que se vea tenue), avísame y lo dejo suelto.

<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Despliegue en Cloudflare Workers (Wrangler + R2)

El build de Nitro/TanStack Start genera el worker en `dist/server/index.mjs` y los
assets estáticos en `dist/client`. `wrangler.jsonc` (raíz) apunta a esas rutas y
declara el binding R2 `MEMORIAL_MEDIA` → bucket `tereqrdo-media`.

```bash
npx wrangler login                              # autenticarse en Cloudflare
npx wrangler r2 bucket create tereqrdo-media    # crear el bucket (una sola vez)
bun install                                     # o npm install
bun run build                                   # genera dist/server + dist/client
bun run cf:dev                                  # worker local con bindings reales de R2
bun run cf:deploy                               # despliegue a Cloudflare Workers
```

El bucket **debe existir antes** del deploy: si no, `wrangler deploy` falla al
resolver el binding.

Acceso al bucket desde código server-side: `src/lib/cloudflare-env.server.ts`
(`getMemorialMediaBucket()`). Nunca se importa desde el cliente.

**Siguiente paso pendiente:** el formulario `src/routes/crear-memorial.tsx` sólo
crea object URLs locales. Para subir de verdad falta definir (a) validación de
tipo/tamaño y límites, (b) esquema en Supabase para asociar las claves de R2 al
memorial, y (c) cómo se sirven los medios (ruta proxy autenticada o dominio
público de R2). Hasta decidir eso, no se implementa la subida.

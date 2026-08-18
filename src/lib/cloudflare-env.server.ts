/**
 * Server-only access to Cloudflare Worker bindings.
 *
 * This file is never bundled into the client (the `.server.ts` suffix is
 * blocked by the import guard), so bindings and any credentials they carry
 * stay on the server.
 *
 * Usage from a server function handler:
 *
 *   import { getMemorialMediaBucket } from "@/lib/cloudflare-env.server";
 *   const bucket = getMemorialMediaBucket();
 *   await bucket.put(key, file.stream(), { httpMetadata: { contentType } });
 */

/** Minimal structural type for an R2 bucket binding (avoids a hard dep on @cloudflare/workers-types). */
export interface R2BucketLike {
  get(key: string): Promise<unknown | null>;
  put(key: string, value: unknown, options?: unknown): Promise<unknown>;
  delete(key: string | string[]): Promise<void>;
  head(key: string): Promise<unknown | null>;
  list(options?: unknown): Promise<unknown>;
  createMultipartUpload?(key: string, options?: unknown): Promise<unknown>;
}

export interface CloudflareEnv {
  /** R2 bucket holding memorial media (photos, videos). Binding declared in wrangler.jsonc. */
  MEMORIAL_MEDIA?: R2BucketLike;
  /** Static assets binding created by the Nitro/Cloudflare build. */
  ASSETS?: { fetch: (request: Request) => Promise<Response> };
  [key: string]: unknown;
}

/**
 * Reads the Worker env. In the Cloudflare runtime Nitro exposes bindings on
 * `globalThis.__env__` / `process.env`; both are checked so this also degrades
 * gracefully in local Node dev (returns an empty env).
 */
export function getCloudflareEnv(): CloudflareEnv {
  const g = globalThis as Record<string, unknown>;
  const candidate =
    (g["__env__"] as CloudflareEnv | undefined) ??
    (g["__cf_env__"] as CloudflareEnv | undefined) ??
    (typeof process !== "undefined" ? (process.env as unknown as CloudflareEnv) : undefined);
  return candidate ?? {};
}

/** Returns the R2 media bucket, or throws a clear error when the binding is missing. */
export function getMemorialMediaBucket(): R2BucketLike {
  const bucket = getCloudflareEnv().MEMORIAL_MEDIA;
  if (!bucket || typeof (bucket as R2BucketLike).put !== "function") {
    throw new Error(
      "R2 binding MEMORIAL_MEDIA is not available. Run the app through `bun run cf:dev` (Wrangler) and make sure the bucket 'tereqrdo-media' exists.",
    );
  }
  return bucket as R2BucketLike;
}

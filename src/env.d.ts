/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_SECURITY_EMAIL: string;
  readonly DEPLOYED_URL: string;
  readonly WP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

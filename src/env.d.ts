/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_SECURITY_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


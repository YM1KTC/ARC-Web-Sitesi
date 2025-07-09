// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

// Netlify Identity types
interface NetlifyUser {
  id: string;
  email: string;
  user_metadata: Record<string, unknown>;
  app_metadata: Record<string, unknown>;
}

interface NetlifyIdentity {
  on: (event: string, callback: (user?: NetlifyUser) => void) => void;
  init: () => void;
  open: () => void;
  close: () => void;
  currentUser: () => NetlifyUser | null;
  logout: () => void;
}

declare global {
  interface Window {
    netlifyIdentity?: NetlifyIdentity;
  }
}

export {};

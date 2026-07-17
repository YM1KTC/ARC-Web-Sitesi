import type { APIRoute } from 'astro';
import { validatePreviewUrl } from '@sanity/preview-url-secret';
import { sanityClient } from '~/lib/sanity';

export const PREVIEW_COOKIE = '__sanity_preview';

// Studio'nun Sunum (Presentation) aracı önizlemeyi bu adres üzerinden açar.
// URL'deki tek kullanımlık secret Sanity'de saklanan değerle doğrulanır;
// geçerliyse önizleme çerezi yazılıp /onizleme rotasına yönlendirilir.
export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const { isValid, redirectTo = '/onizleme' } = await validatePreviewUrl(sanityClient, request.url);

  if (!isValid) {
    return new Response('Geçersiz önizleme isteği', { status: 401 });
  }

  cookies.set(PREVIEW_COOKIE, 'true', {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
  });

  return redirect(redirectTo);
};

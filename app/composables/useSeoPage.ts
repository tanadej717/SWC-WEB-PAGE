interface SeoPageOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function useSeoPage(options: SeoPageOptions): void {
  const baseUrl = 'https://swclohakit.com';
  const canonicalUrl = `${baseUrl}${options.path}`;
  const image = options.ogImage ?? '/web-800x800.jpg';

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: canonicalUrl,
    ogImage: `${baseUrl}${image}`,
    ogType: 'website',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterCard: 'summary_large_image',
    twitterImage: `${baseUrl}${image}`,
  });

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
  });
}

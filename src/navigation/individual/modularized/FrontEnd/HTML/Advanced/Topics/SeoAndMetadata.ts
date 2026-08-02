import type { Subpage } from '@/types/navigation';

const SeoAndMetadata: Subpage = {
  name: 'SEO & Metadata',
  subpages: [
    {
      name: 'SEO Best Practices',
      path: '/front-end/html/advanced/topics/seo-and-metadata/seo-best-practices'
    },
    {
      name: 'Social Metadata (OpenGraph / Twitter)',
      path: '/front-end/html/advanced/topics/seo-and-metadata/social-metadata'
    },
    {
      name: 'Structured Data (JSON-LD)',
      path: '/front-end/html/advanced/topics/seo-and-metadata/structured-data'
    },
    {
      name: 'Internationalization (lang / dir)',
      path: '/front-end/html/advanced/topics/seo-and-metadata/internationalization'
    }
  ]
};

export default SeoAndMetadata;
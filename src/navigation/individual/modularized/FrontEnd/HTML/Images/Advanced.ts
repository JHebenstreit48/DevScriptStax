import type { Subpage } from '@/types/navigation';

const Advanced: Subpage = 
{
  name: 'Advanced',
  subpages: 
  [
    {
      name: 'Performance',
      subpages: 
      [
        {
          name: 'Image Performance (loading / decoding / fetchpriority)',
          path: '/front-end/html/images/advanced/performance/image-performance'
        },
        {
          name: 'Preloading LCP Images',
          path: '/front-end/html/images/advanced/performance/preloading-lcp'
        },
        {
          name: 'Optimization Pipeline',
          path: '/front-end/html/images/advanced/performance/optimization-pipeline'
        }
      ]
    },
    {
      name: 'Delivery',
      subpages: 
      [
        {
          name: 'CDN & Client Hints (DPR / Width)',
          path: '/front-end/html/images/advanced/delivery/cdn-and-client-hints'
        },
        {
          name: 'Format Fallbacks & Negotiation',
          path: '/front-end/html/images/advanced/delivery/format-fallbacks'
        },
        {
          name: 'Responsive Images (srcset / sizes)',
          path: '/front-end/html/images/advanced/delivery/responsive-images'
        },
        {
          name: 'Art Direction (<picture> / media)',
          path: '/front-end/html/images/advanced/delivery/art-direction'
        }
      ]
    }
  ]
};

export default Advanced;
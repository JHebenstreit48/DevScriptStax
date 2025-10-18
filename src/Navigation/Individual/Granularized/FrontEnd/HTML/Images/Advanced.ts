import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

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
          path: '/html/images/image-performance'
        },
        {
          name: 'Preloading LCP Images',
          path: '/html/images/preloading-lcp'
        }
      ]
    },
    {
      name: 'Delivery',
      subpages: 
      [
        {
          name: 'CDN & Client Hints (DPR / Width)',
          path: '/html/images/cdn-and-client-hints'
        },
        {
          name: 'Format Fallbacks & Negotiation',
          path: '/html/images/format-fallbacks'
        }
      ]
    }
  ]
};

export default Advanced;
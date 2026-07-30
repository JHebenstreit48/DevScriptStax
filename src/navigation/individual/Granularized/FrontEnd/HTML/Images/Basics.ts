import type { Subpage } from '@/types/navigation';

const Basics: Subpage = 
{
  name: 'Basics',
  subpages: 
  [
    {
      name: 'Foundations',
      subpages: 
      [
        {
          name: 'Images (Basics)',
          path: '/html/images/basics'
        },
        {
          name: 'Intrinsic Size & Aspect Ratio',
          path: '/html/images/intrinsic-size-and-aspect-ratio'
        }
      ]
    },
    {
      name: 'Semantics & Formats',
      subpages: 
      [
        {
          name: 'Alt Text & Semantics',
          path: '/html/images/alt-and-semantics'
        },
        {
          name: 'Formats Overview (PNG/JPEG/WebP/AVIF/SVG)',
          path: '/html/images/formats-overview'
        }
      ]
    }
  ]
};

export default Basics;
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
          path: '/front-end/html/images/basics/foundations/images-basics'
        },
        {
          name: 'Intrinsic Size & Aspect Ratio',
          path: '/front-end/html/images/basics/foundations/intrinsic-size-and-aspect-ratio'
        }
      ]
    },
    {
      name: 'Semantics & Formats',
      subpages: 
      [
        {
          name: 'Alt Text & Semantics',
          path: '/front-end/html/images/basics/semantics-and-formats/alt-and-semantics'
        },
        {
          name: 'Formats Overview (PNG/JPEG/WebP/AVIF/SVG)',
          path: '/front-end/html/images/basics/semantics-and-formats/formats-overview'
        },
        {
          name: 'Figure & Figcaption',
          path: '/front-end/html/images/basics/semantics-and-formats/figure-and-figcaption'
        }
      ]
    }
  ]
};

export default Basics;
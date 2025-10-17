import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Intermediate: Subpage = 
{
  name: 'Intermediate',
  subpages: 
  [
    {
      name: 'Responsive Techniques',
      subpages: 
      [
        {
          name: 'Responsive Images (srcset / sizes)',
          path: '/html/images/responsive-images'
        },
        {
          name: 'Art Direction (<picture> / media)',
          path: '/html/images/art-direction'
        }
      ]
    },
    {
      name: 'Authoring Patterns',
      subpages: 
      [
        {
          name: 'Figure & Figcaption',
          path: '/html/images/figure-and-figcaption'
        },
        {
          name: 'Optimization Pipeline',
          path: '/html/images/optimization-pipeline'
        }
      ]
    }
  ]
};

export default Intermediate;
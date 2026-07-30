import type { Subpage } from '@/types/navigation';

import Peformance from '@/navigation/individual/modularized/FrontEnd/React/Advanced/Performance';
import BestPractices from '@/navigation/individual/modularized/FrontEnd/React/Advanced/BestPractices';
import SEOMetadata from '@/navigation/individual/modularized/FrontEnd/React/Advanced/SEOMetadata';
import ReactAndTS from '@/navigation/individual/modularized/FrontEnd/React/Advanced/ReactAndTypeScript';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
      Peformance,
      BestPractices,
      SEOMetadata,
      ReactAndTS
  ]
};

export default Advanced;
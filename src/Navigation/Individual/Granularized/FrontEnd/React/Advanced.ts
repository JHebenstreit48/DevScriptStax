import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Peformance from '@/Navigation/Individual/Granularized/FrontEnd/React/Advanced/Performance';
import BestPractices from '@/Navigation/Individual/Granularized/FrontEnd/React/Advanced/BestPractices';
import SEOMetadata from '@/Navigation/Individual/Granularized/FrontEnd/React/Advanced/SEOMetadata';
import ReactAndTS from '@/Navigation/Individual/Granularized/FrontEnd/React/Advanced/ReactAndTypeScript';


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
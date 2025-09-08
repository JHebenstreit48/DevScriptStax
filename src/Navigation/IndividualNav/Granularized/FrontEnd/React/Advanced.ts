import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Peformance from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Advanced/Performance';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Advanced/BestPractices';
import SEOMetadata from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Advanced/SEOMetadata';
import ReactAndTS from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/Advanced/ReactAndTypeScript';


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
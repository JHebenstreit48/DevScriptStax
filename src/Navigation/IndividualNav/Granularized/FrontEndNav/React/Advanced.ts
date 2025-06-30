import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Peformance from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Advanced/Performance';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Advanced/BestPractices';
import SEOMetadata from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Advanced/SEOMetadata';
import ReactAndTS from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Advanced/ReactAndTypeScript';


const ReactAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
      Peformance,
      BestPractices,
      SEOMetadata,
      ReactAndTS
  ]
};

export default ReactAdvanced;
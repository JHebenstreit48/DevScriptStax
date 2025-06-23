import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import AdvancedTopics from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Advanced/Topics';
import BestPractices from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Advanced/BestPractices';
import AppSetup from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Advanced/AppSetup';
import SEOMetadata from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Advanced/SEOMetadata';
import ReactAndTS from '@/Navigation/IndividualNav/Granularized/FrontEndNav/React/Advanced/ReactAndTypeScript';


const ReactAdvanced: Subpage = {
  name: 'Advanced',
  subpages: [
      AdvancedTopics,
      BestPractices,
      AppSetup,
      SEOMetadata,
      ReactAndTS
  ]
};

export default ReactAdvanced;
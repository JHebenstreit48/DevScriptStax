import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';
import AdvancedTopics from '@/Navigation/IndividualNav/FrontEndNav/ReactNav/Advanced/Topics';
import BestPractices from '@/Navigation/IndividualNav/FrontEndNav/ReactNav/Advanced/BestPractices';
import AppSetup from '@/Navigation/IndividualNav/FrontEndNav/ReactNav/Advanced/AppSetup';
import SEOMetadata from '@/Navigation/IndividualNav/FrontEndNav/ReactNav/Advanced/SEOMetadata';
import ReactAndTS from '@/Navigation/IndividualNav/FrontEndNav/ReactNav/Advanced/ReactAndTypeScript';


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

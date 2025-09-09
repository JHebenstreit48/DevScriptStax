import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ReactTools from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/ToolsAndTesting/Tools';
import ReactTesting from '@/Navigation/IndividualNav/Granularized/FrontEnd/React/ToolsAndTesting/Testing';

const ReactToolsAndTesting: Subpage = {
  name: 'Tools & Testing',
  subpages: [
    ReactTools,
    ReactTesting
  ]
};

export default ReactToolsAndTesting;
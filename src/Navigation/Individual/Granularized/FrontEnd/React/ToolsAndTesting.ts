import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import ReactTools from '@/Navigation/Individual/Granularized/FrontEnd/React/ToolsAndTesting/Tools';
import ReactTesting from '@/Navigation/Individual/Granularized/FrontEnd/React/ToolsAndTesting/Testing';

const ReactToolsAndTesting: Subpage = {
  name: 'Tools & Testing',
  subpages: [
    ReactTools,
    ReactTesting
  ]
};

export default ReactToolsAndTesting;
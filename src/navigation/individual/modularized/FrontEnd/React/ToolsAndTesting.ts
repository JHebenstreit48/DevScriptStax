import type { Subpage } from '@/types/navigation';

import ReactTools from '@/navigation/individual/modularized/FrontEnd/React/ToolsAndTesting/Tools';
import ReactTesting from '@/navigation/individual/modularized/FrontEnd/React/ToolsAndTesting/Testing';

const ReactToolsAndTesting: Subpage = {
  name: 'Tools & Testing',
  subpages: [
    ReactTools,
    ReactTesting
  ]
};

export default ReactToolsAndTesting;
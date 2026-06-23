import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/Hyperscalers/Azure/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/Hyperscalers/Azure/Advanced';

const Azure: Subpage = {
  name: 'Azure',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Azure;
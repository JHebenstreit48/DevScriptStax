import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Hyperscalers/Azure/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Hyperscalers/Azure/Advanced';

const Azure: Subpage = {
  name: 'Azure',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Azure;
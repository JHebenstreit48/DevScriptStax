import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Hyperscalers/AWS/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Hyperscalers/AWS/Advanced';

const AWS: Subpage = {
  name: 'AWS',
  subpages: [
    Basics,
    Advanced
  ]
};

export default AWS;
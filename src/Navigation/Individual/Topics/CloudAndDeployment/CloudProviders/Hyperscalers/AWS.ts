import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/Hyperscalers/AWS/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/Hyperscalers/AWS/Advanced';

const AWS: Subpage = {
  name: 'AWS',
  subpages: [
    Basics,
    Advanced
  ]
};

export default AWS;
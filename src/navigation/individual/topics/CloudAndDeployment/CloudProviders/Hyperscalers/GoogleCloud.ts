import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Hyperscalers/GoogleCloud/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Hyperscalers/GoogleCloud/Advanced';

const GoogleCloud: Subpage = {
  name: 'Google Cloud',
  subpages: [
    Basics,
    Advanced
  ]
};

export default GoogleCloud;
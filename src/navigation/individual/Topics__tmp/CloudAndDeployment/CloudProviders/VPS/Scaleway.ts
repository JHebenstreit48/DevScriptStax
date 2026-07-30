import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/VPS/Scaleway/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/VPS/Scaleway/Advanced';

const Scaleway: Subpage = {
  name: 'Scaleway',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Scaleway;
import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/VPS/Scaleway/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/VPS/Scaleway/Advanced';

const Scaleway: Subpage = {
  name: 'Scaleway',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Scaleway;
import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/VPS/HetznerCloud/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/VPS/HetznerCloud/Advanced';

const HetznerCloud: Subpage = {
  name: 'Hetzner Cloud',
  subpages: [
    Basics,
    Advanced
  ]
};

export default HetznerCloud;
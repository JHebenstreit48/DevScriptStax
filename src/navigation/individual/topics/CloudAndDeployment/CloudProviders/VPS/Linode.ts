import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/VPS/Linode/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/VPS/Linode/Advanced';

const Linode: Subpage = {
  name: 'Linode',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Linode;
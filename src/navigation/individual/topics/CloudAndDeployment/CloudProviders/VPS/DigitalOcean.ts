import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/VPS/DigitalOcean/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/VPS/DigitalOcean/Advanced';

const DigitalOcean: Subpage = {
  name: 'DigitalOcean',
  subpages: [
    Basics,
    Advanced
  ]
};

export default DigitalOcean;
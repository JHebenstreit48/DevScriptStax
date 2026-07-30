import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/VPS/DigitalOcean/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/VPS/DigitalOcean/Advanced';

const DigitalOcean: Subpage = {
  name: 'DigitalOcean',
  subpages: [
    Basics,
    Advanced
  ]
};

export default DigitalOcean;
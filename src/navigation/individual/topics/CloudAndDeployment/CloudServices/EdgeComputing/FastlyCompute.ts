import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced';

const FastlyCompute: Subpage = {
  name: 'Fastly Compute',
  subpages: [
    Basics,
    Advanced
  ]
};

export default FastlyCompute;
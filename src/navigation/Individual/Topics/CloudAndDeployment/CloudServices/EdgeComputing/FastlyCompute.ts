import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced';

const FastlyCompute: Subpage = {
  name: 'Fastly Compute',
  subpages: [
    Basics,
    Advanced
  ]
};

export default FastlyCompute;
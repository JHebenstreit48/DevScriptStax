import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute/Advanced';

const FastlyCompute: Subpage = {
  name: 'Fastly Compute',
  subpages: [
    Basics,
    Advanced
  ]
};

export default FastlyCompute;
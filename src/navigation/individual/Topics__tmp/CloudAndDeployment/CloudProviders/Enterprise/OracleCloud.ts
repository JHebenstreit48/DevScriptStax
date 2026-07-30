import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/Enterprise/OracleCloud/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/Enterprise/OracleCloud/Advanced';


const OracleCloud: Subpage = {
  name: 'Oracle Cloud',
  subpages: [
    Basics,
    Advanced
  ]
};

export default OracleCloud;
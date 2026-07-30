import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Enterprise/OracleCloud/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Enterprise/OracleCloud/Advanced';


const OracleCloud: Subpage = {
  name: 'Oracle Cloud',
  subpages: [
    Basics,
    Advanced
  ]
};

export default OracleCloud;
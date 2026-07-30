import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/Enterprise/IBMCloud/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/Enterprise/IBMCloud/Advanced';


const IBMCloud: Subpage = {
  name: 'IBM Cloud',
  subpages: [
    Basics,
    Advanced
  ]
};

export default IBMCloud;
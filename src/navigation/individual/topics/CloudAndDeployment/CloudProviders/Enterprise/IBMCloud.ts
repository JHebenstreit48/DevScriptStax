import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Enterprise/IBMCloud/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Enterprise/IBMCloud/Advanced';


const IBMCloud: Subpage = {
  name: 'IBM Cloud',
  subpages: [
    Basics,
    Advanced
  ]
};

export default IBMCloud;
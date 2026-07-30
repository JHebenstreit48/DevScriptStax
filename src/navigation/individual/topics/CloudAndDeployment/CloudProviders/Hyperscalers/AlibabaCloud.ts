import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Hyperscalers/AlibabaCloud/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudProviders/Hyperscalers/AlibabaCloud/Advanced';

const AlibabaCloud: Subpage = {
  name: 'Alibaba Cloud',
  subpages: [
    Basics,
    Advanced
  ]
};

export default AlibabaCloud;
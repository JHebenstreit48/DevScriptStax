import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/Hyperscalers/AlibabaCloud/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudProviders/Hyperscalers/AlibabaCloud/Advanced';

const AlibabaCloud: Subpage = {
  name: 'Alibaba Cloud',
  subpages: [
    Basics,
    Advanced
  ]
};

export default AlibabaCloud;
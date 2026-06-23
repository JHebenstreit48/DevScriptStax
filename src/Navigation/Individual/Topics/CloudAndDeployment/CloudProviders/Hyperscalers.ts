import type { Subpage } from '@/types/navigation';

import AWS from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/Hyperscalers/AWS';
import GoogleCloud from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/Hyperscalers/GoogleCloud';
import Azure from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/Hyperscalers/Azure';
import AlibabaCloud from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/Hyperscalers/AlibabaCloud';

const Hyperscalers: Subpage = {
  name: 'Hyperscalers',
  subpages: [
    AWS,
    GoogleCloud,
    Azure,
    AlibabaCloud
  ]
};

export default Hyperscalers;
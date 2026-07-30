import type { Subpage } from '@/types/navigation';

import AWS from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/Hyperscalers/AWS';
import GoogleCloud from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/Hyperscalers/GoogleCloud';
import Azure from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/Hyperscalers/Azure';
import AlibabaCloud from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/Hyperscalers/AlibabaCloud';

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
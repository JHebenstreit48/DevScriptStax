import type { Subpage } from '@/types/navigation';

import Hyperscalers from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/Hyperscalers';
import VPS from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/VPS';
import Enterprise from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/Enterprise';

const cloudProviders: Subpage = {
  name: "Cloud Providers",
  subpages: [
    Hyperscalers,
    VPS,
    Enterprise,
  ]
};

export default cloudProviders;
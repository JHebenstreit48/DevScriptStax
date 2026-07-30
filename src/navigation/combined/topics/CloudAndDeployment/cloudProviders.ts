import type { Subpage } from '@/types/navigation';

import Hyperscalers from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/Hyperscalers';
import VPS from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/VPS';
import Enterprise from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/Enterprise';

const cloudProviders: Subpage = {
  name: "Cloud Providers",
  subpages: [
    Hyperscalers,
    VPS,
    Enterprise,
  ]
};

export default cloudProviders;
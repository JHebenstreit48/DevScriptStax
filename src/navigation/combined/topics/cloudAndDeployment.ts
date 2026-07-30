import type { Subpage } from '@/types/navigation';

import cloudServices from '@/navigation/combined/topics/CloudAndDeployment/cloudServices';
import cloudProviders from '@/navigation/combined/topics/CloudAndDeployment/cloudProviders';

const cloudAndDeployment: Subpage = {
  name: "CloudOps",
  subpages: [
    cloudServices,
    cloudProviders
  ]
};

export default cloudAndDeployment;
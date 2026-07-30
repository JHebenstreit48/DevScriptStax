import type { Subpage } from '@/types/navigation';

import DeploymentPlatforms from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/DeploymentPlatforms';
import ServerlessComputing from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/ServerlessComputing';
import EdgeComputing from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/EdgeComputing';
import Provisioning from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/Provisioning';

const cloudServices: Subpage = {
  name: 'Cloud Services',
  subpages: [
    DeploymentPlatforms,
    ServerlessComputing,
    EdgeComputing,
    Provisioning
  ]
};

export default cloudServices;
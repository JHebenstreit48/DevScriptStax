import type { Subpage } from '@/types/navigation';

import DeploymentPlatforms from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/DeploymentPlatforms';
import ServerlessComputing from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/ServerlessComputing';
import EdgeComputing from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/EdgeComputing';
import Provisioning from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/Provisioning';

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
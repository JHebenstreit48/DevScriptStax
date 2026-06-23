import type { Subpage } from '@/types/navigation';

import FrontEnd from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd';
import FullStack from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack';

const DeploymentPlatforms: Subpage = {
  name: 'Deployment Platforms',
  subpages: [
    FrontEnd,
    FullStack
  ]
};

export default DeploymentPlatforms;
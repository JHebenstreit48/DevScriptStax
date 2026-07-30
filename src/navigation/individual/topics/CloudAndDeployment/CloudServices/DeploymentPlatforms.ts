import type { Subpage } from '@/types/navigation';

import FrontEnd from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd';
import FullStack from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack';

const DeploymentPlatforms: Subpage = {
  name: 'Deployment Platforms',
  subpages: [
    FrontEnd,
    FullStack
  ]
};

export default DeploymentPlatforms;
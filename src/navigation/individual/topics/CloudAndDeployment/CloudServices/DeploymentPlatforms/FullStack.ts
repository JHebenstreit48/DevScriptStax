import type { Subpage } from '@/types/navigation';

import Render from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render';
import Railway from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway';
import Fly from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly';

const FullStack: Subpage = {
  name: 'Full-Stack',
  subpages: [
    Render,
    Railway,
    Fly
  ]
};

export default FullStack;
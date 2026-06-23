import type { Subpage } from '@/types/navigation';

import Render from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render';
import Railway from "@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway";
import Fly from "@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly";

const FullStack: Subpage = {
  name: 'Full-Stack',
  subpages: [
    Render,
    Railway,
    Fly
  ]
};

export default FullStack;
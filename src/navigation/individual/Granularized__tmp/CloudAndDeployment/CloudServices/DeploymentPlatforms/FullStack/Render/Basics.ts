import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Fundamentals';
import Setup from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup';
import Services from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services';
import Configuration from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Configuration';
import Data from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Data';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Setup,
    Services,
    Configuration,
    Data
  ],
};

export default Basics;
import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Fundamentals';
import Setup from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup';
import Services from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services';
import Configuration from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Configuration';
import Data from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Data';

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
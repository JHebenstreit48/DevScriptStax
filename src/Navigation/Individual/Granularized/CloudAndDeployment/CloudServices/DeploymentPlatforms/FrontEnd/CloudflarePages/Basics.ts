import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Fundamentals';
import Setup from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Setup';
import BuildsAndConfig from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/BuildsAndConfigs';
import Routing from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Routing';
import Deploys from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Deploys';
import Monitoring from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Monitoring';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    Setup,
    BuildsAndConfig,
    Routing,
    Deploys,
    Monitoring
  ]
};

export default Basics;
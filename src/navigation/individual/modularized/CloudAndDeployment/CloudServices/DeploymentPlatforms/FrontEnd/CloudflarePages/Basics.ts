import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Fundamentals';
import Setup from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Setup';
import BuildsAndConfig from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/BuildsAndConfigs';
import Routing from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Routing';
import Deploys from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Deploys';
import Monitoring from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics/Monitoring';

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
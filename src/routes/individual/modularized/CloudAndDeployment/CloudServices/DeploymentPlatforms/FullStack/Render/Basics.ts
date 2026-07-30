import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Fundamentals';
import Setup from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Setup';
import Services from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Services';
import Config from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Configuration';
import Data from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics/Data';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Setup,
    ...Services,
    ...Config,
    ...Data
];

export default Basics;
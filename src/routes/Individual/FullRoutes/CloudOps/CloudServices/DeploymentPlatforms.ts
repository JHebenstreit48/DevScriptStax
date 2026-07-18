import { RouteObject } from "react-router-dom";

import FrontEnd from '@/routes/Individual/FullRoutes/CloudOps/CloudServices/DeploymentPlatforms/FrontEnd';
import FullStack from '@/routes/Individual/FullRoutes/CloudOps/CloudServices/DeploymentPlatforms/FullStack';

const DeploymentPlatforms: RouteObject[] = [
    ...FrontEnd,
    ...FullStack
];
export default DeploymentPlatforms;
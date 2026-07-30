import { RouteObject } from "react-router-dom";

import FrontEnd from '@/routes/individual/topics/CloudOps/CloudServices/DeploymentPlatforms/FrontEnd';
import FullStack from '@/routes/individual/topics/CloudOps/CloudServices/DeploymentPlatforms/FullStack';

const DeploymentPlatforms: RouteObject[] = [
    ...FrontEnd,
    ...FullStack
];
export default DeploymentPlatforms;
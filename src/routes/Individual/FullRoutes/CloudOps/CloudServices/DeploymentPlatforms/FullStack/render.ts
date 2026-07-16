import { RouteObject } from "react-router-dom";

import Basics from '@/routes/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics';
import Advanced from '@/routes/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced';

const Angular: RouteObject[] = [
    ...Basics,
    ...Advanced
];
export default Angular;
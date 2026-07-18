import { RouteObject } from "react-router-dom";

import Basics from '@/routes/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics';
import Advanced from '@/routes/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced';

const Render: RouteObject[] = [
    ...Basics,
    ...Advanced
];
export default Render;
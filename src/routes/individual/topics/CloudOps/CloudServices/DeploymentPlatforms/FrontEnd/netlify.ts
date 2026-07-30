import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics';
// import Advanced from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced';

const Netlify: RouteObject[] = [
    ...Basics,
    // ...Advanced
];
export default Netlify;
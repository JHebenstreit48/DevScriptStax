import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Fundamentals';
import Setup from '@/routes/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Setup';
import BuildsAndConfig from '@/routes/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/BuildsAndConfig';
import Deploys from '@/routes/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Deploys';
import RoutingAndHeaders from '@/routes/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/RoutingAndHeaders';
import FormsAndIdentity from '@/routes/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/FormsAndIdentity';
import Monitoring from '@/routes/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Monitoring';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Setup,
  ...BuildsAndConfig,
  ...Deploys,
  ...RoutingAndHeaders,
  ...FormsAndIdentity,
  ...Monitoring,
];

export default Basics;
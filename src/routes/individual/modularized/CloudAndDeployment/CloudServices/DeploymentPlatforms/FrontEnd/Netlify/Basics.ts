import { RouteObject } from 'react-router-dom';

import Fundamentals from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Fundamentals';
import Setup from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Setup';
import BuildsAndConfig from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/BuildsAndConfig';
import Deploys from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Deploys';
import RoutingAndHeaders from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/RoutingAndHeaders';
import FormsAndIdentity from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/FormsAndIdentity';
import Monitoring from '@/routes/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/Monitoring';

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
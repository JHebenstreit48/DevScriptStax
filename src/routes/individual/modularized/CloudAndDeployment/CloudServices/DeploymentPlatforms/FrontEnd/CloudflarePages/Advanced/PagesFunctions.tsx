import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FunctionsBasics = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Advanced/PagesFunctions/FunctionsBasics'));
const WranglerAndLocalDev = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Advanced/PagesFunctions/WranglerAndLocalDev'));

const PagesFunctions: RouteObject[] = [
  {
    path: '/cloudflare-pages/advanced/pages-functions/functions-basics',
    element: <FunctionsBasics />,
  },
  {
    path: '/cloudflare-pages/advanced/pages-functions/wrangler-local-dev',
    element: <WranglerAndLocalDev />,
  },
];

export default PagesFunctions;

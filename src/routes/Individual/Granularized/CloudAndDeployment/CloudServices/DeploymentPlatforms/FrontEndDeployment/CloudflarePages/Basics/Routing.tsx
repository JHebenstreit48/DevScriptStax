import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Redirects = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Basics/Routing/Redirects'));
const HeadersAndCORS = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Basics/Routing/HeadersAndCORS'));

const Routing: RouteObject[] = [
  {
    path: '/cloudflare-pages/basics/routing/redirects',
    element: <Redirects />,
  },
  {
    path: '/cloudflare-pages/basics/routing/headers-cors',
    element: <HeadersAndCORS />,
  },
];

export default Routing;

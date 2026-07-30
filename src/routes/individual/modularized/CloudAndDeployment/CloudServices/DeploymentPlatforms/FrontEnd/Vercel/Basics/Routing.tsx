import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RewritesAndRedirects = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/Routing/RewritesAndRedirects'));
const HeadersAndCORS = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/Routing/HeadersAndCORS'));

const Routing: RouteObject[] = [
  {
    path: '/vercel/basics/routing/rewrites-redirects',
    element: <RewritesAndRedirects />,
  },
  {
    path: '/vercel/basics/routing/headers-cors',
    element: <HeadersAndCORS />,
  },
];

export default Routing;

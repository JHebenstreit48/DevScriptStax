import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RedirectsAndRewrites = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/RoutingAndHeaders/RedirectsAndRewrites'));
const HeadersAndCORS = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/RoutingAndHeaders/HeadersAndCORS'));

const RoutingAndHeaders: RouteObject[] = [
  {
    path: '/netlify/basics/routing-headers/redirects-rewrites',
    element: <RedirectsAndRewrites />,
  },
  {
    path: '/netlify/basics/routing-headers/headers-cors',
    element: <HeadersAndCORS />,
  },
];

export default RoutingAndHeaders;

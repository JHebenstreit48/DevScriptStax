import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/Fundamentals/Introduction'));
const PlatformModel = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/Fundamentals/PlatformModel'));

const Fundamentals: RouteObject[] = [
  {
    path: '/vercel/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/vercel/basics/fundamentals/platform-model',
    element: <PlatformModel />,
  },
];

export default Fundamentals;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Vercel = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Advanced/Deployment/Vercel'));
const CustomPlatforms = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Advanced/Deployment/CustomPlatforms'));

const Deployment: RouteObject[] = [
  {
    path: '/nextjs/deployment/vercel',
    element: <Vercel />,
  },
  {
    path: '/nextjs/deployment/custom-platforms',
    element: <CustomPlatforms />,
  },
];

export default Deployment;

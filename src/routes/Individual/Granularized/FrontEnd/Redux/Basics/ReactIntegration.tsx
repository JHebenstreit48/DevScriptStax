import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProviderAndStore = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Basics/ReactIntegration/ProviderAndStore'));
const Hooks = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Basics/ReactIntegration/Hooks'));
const Connect = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Basics/ReactIntegration/Connect'));

const ReactIntegration: RouteObject[] = [
  {
    path: '/redux/basics/react-integration/provider-and-store',
    element: <ProviderAndStore />,
  },
  {
    path: '/redux/basics/react-integration/hooks',
    element: <Hooks />,
  },
  {
    path: '/redux/basics/react-integration/connect-legacy',
    element: <Connect />,
  },
];

export default ReactIntegration;

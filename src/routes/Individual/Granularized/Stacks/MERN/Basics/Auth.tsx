import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JWTFlowOverview = lazy(() => import('@/pages/mainTabs/Stacks/MERN/Basics/Auth/JWTFlowOverview'));
const ProtectedRoutesAndGuards = lazy(() => import('@/pages/mainTabs/Stacks/MERN/Basics/Auth/ProtectedRoutesAndGuards'));

const Auth: RouteObject[] = [
  {
    path: '/mern/basics/auth-basics/jwt-flow-overview',
    element: <JWTFlowOverview />,
  },
  {
    path: '/mern/basics/auth-basics/protected-routes-and-guards',
    element: <ProtectedRoutesAndGuards />,
  },
];

export default Auth;

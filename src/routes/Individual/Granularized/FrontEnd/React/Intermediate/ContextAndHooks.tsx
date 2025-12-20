import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ContextAPI = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Intermediate/ContextAndHooks/ContextAPI'));
const CustomHooks = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Intermediate/ContextAndHooks/CustomHooks'));

const ContextAndHooks: RouteObject[] = [
  {
    path: '/react/intermediate/context/context-api',
    element: <ContextAPI />,
  },
  {
    path: '/react/intermediate/context/custom-hooks',
    element: <CustomHooks />,
  },
];

export default ContextAndHooks;

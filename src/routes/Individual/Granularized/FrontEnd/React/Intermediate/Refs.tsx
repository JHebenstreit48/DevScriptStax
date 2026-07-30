import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WorkingWithUseRef = lazy(() => import('@/pages/mainTabs/FrontEnd/React/Intermediate/Refs/WorkingWithUseRef'));
const UseImperativeHandleAndForwardRef = lazy(() => import('@/pages/mainTabs/FrontEnd/React/Intermediate/Refs/UseImperativeHandleAndForwardRef'));

const Refs: RouteObject[] = [
  {
    path: '/react/intermediate/refs/useref',
    element: <WorkingWithUseRef />,
  },
  {
    path: '/react/intermediate/refs/imperative',
    element: <UseImperativeHandleAndForwardRef />,
  },
];

export default Refs;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Props = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Basics/CoreConcepts/PropsAndState/Props'));
const State = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Basics/CoreConcepts/PropsAndState/State'));

const PropsAndState: RouteObject[] = [
  {
    path: '/react/basics/core/propsstate/props',
    element: <Props />,
  },
  {
    path: '/react/basics/core/propsstate/state',
    element: <State />,
  },
];

export default PropsAndState;
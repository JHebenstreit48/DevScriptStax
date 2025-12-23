import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ActionsAndReducers = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Basics/StateAndReducers/ActionsAndReducers'));
const ImmutabilityBasics = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Basics/StateAndReducers/ImmutabilityBasics'));

const StateAndReducers: RouteObject[] = [
  {
    path: '/redux/basics/state-reducers/actions-and-reducers',
    element: <ActionsAndReducers />,
  },
  {
    path: '/redux/basics/state-reducers/immutability-basics',
    element: <ImmutabilityBasics />,
  },
];

export default StateAndReducers;

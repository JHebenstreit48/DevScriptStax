import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const State = lazy(() => import('@/Pages/MainTabs/FrontEndPages/ReactPages/Basics/CoreConcepts/PropsAndState/State'));

const PropsAndState: RouteObject[] = [
    {
        path: '/react/basics/core/propsstate/state',
        element: <State />,
    }
];

export default PropsAndState;
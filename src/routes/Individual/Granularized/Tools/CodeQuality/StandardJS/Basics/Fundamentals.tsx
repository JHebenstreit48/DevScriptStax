import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Basics/Fundamentals/Introduction'));
const RulesAndPhilosophy = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Basics/Fundamentals/RulesAndPhilosophy'));

const Fundamentals: RouteObject[] = [
  {
    path: '/standardjs/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/standardjs/basics/fundamentals/rules-philosophy',
    element: <RulesAndPhilosophy />,
  },
];

export default Fundamentals;

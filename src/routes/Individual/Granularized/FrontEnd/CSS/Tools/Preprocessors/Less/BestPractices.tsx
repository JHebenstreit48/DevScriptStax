import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Optimization = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Less/BestPractices/Optimization'));
const Debugging = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Less/BestPractices/Debugging'));

const BestPractices: RouteObject[] = [
  {
    path: '/css/tools/preprocessors/less/best-practices/optimization',
    element: <Optimization />,
  },
  {
    path: '/css/tools/preprocessors/less/best-practices/debugging',
    element: <Debugging />,
  },
];

export default BestPractices;

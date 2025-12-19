import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Optimization = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Sass/BestPractices/Optimization'));
const Debugging = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Sass/BestPractices/Debugging'));

const BestPractices: RouteObject[] = [
  {
    path: '/css/tools/preprocessors/sass/best-practices/optimization',
    element: <Optimization />,
  },
  {
    path: '/css/tools/preprocessors/sass/best-practices/debugging',
    element: <Debugging />,
  },
];

export default BestPractices;

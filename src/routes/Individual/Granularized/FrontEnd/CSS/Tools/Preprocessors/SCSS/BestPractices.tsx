import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BestPractices = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/SCSS/BestPractices/BestPractices'));
const StyleGuidelines = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/SCSS/BestPractices/StyleGuidelines'));

const BestPractices: RouteObject[] = [
  {
    path: '/css/tools/preprocessors/scss/best-practices/best-practices',
    element: <BestPractices />,
  },
  {
    path: '/css/tools/preprocessors/scss/best-practices/style-guidelines',
    element: <StyleGuidelines />,
  },
];

export default BestPractices;

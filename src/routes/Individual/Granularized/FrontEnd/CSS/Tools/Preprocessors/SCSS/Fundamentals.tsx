import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroAndDifferences = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/SCSS/Fundamentals/IntroAndDifferences'));
const SyntaxVsSass = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/SCSS/Fundamentals/SyntaxVsSass'));
const WhySCSS = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/SCSS/Fundamentals/WhySCSS'));

const Fundamentals: RouteObject[] = [
  {
    path: '/css/tools/preprocessors/scss/fundamentals/intro-differences',
    element: <IntroAndDifferences />,
  },
  {
    path: '/css/tools/preprocessors/scss/fundamentals/syntax-vs-sass',
    element: <SyntaxVsSass />,
  },
  {
    path: '/css/tools/preprocessors/scss/fundamentals/why-scss',
    element: <WhySCSS />,
  },
];

export default Fundamentals;

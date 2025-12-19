import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Sass/Fundamentals/Introduction'));
const VariablesAndNesting = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Sass/Fundamentals/VariablesAndNesting'));
const MixinsAndFunctions = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Sass/Fundamentals/MixinsAndFunctions'));

const Fundamentals: RouteObject[] = [
  {
    path: '/css/tools/preprocessors/sass/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/css/tools/preprocessors/sass/fundamentals/variables-nesting',
    element: <VariablesAndNesting />,
  },
  {
    path: '/css/tools/preprocessors/sass/fundamentals/mixins-functions',
    element: <MixinsAndFunctions />,
  },
];

export default Fundamentals;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Less/Fundamentals/Introduction'));
const SyntaxAndBasics = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Less/Fundamentals/SyntaxAndBasics'));
const VariablesAndNesting = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Less/Fundamentals/VariablesAndNesting'));
const MixinsAndFunctions = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Preprocessors/Less/Fundamentals/MixinsAndFunctions'));

const Fundamentals: RouteObject[] = [
  {
    path: '/css/tools/preprocessors/less/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/css/tools/preprocessors/less/fundamentals/syntax-basics',
    element: <SyntaxAndBasics />,
  },
  {
    path: '/css/tools/preprocessors/less/fundamentals/variables-nesting',
    element: <VariablesAndNesting />,
  },
  {
    path: '/css/tools/preprocessors/less/fundamentals/mixins-functions',
    element: <MixinsAndFunctions />,
  },
];

export default Fundamentals;

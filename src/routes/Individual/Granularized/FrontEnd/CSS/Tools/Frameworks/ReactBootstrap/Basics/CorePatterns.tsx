import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PropsAndVariants = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/CorePatterns/PropsAndVariants'));
const CompositionAndAsProp = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/CorePatterns/CompositionAndAsProp'));

const CorePatterns: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/basics/core-patterns/props-and-variants',
    element: <PropsAndVariants />,
  },
  {
    path: '/frameworks/react-bootstrap/basics/core-patterns/composition-and-asprop',
    element: <CompositionAndAsProp />,
  },
];

export default CorePatterns;

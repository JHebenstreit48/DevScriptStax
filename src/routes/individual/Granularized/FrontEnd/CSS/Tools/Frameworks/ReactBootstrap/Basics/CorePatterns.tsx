import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PropsAndVariants = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/CorePatterns/PropsAndVariants'));
const CompositionAndAsProp = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/CorePatterns/CompositionAndAsProp'));

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

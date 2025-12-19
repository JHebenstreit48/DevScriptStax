import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SSRConsiderations = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/SSRAndCodeSplit/SSRConsiderations'));
const TreeShakingImports = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/SSRAndCodeSplit/TreeShakingImports'));

const SSRAndCodeSplit: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/advanced/ssr-and-code-split/ssr-considerations',
    element: <SSRConsiderations />,
  },
  {
    path: '/frameworks/react-bootstrap/advanced/ssr-and-code-split/tree-shaking-imports',
    element: <TreeShakingImports />,
  },
];

export default SSRAndCodeSplit;

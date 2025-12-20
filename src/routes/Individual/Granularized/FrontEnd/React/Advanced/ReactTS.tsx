import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Advanced/ReactTS/Introduction'));
const GenericsInComponents = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Advanced/ReactTS/GenericsInComponents'));

const ReactTS: RouteObject[] = [
  {
    path: '/react/advanced/react-typescript/introduction',
    element: <Introduction />,
  },
  {
    path: '/react/advanced/react-typescript/generics',
    element: <GenericsInComponents />,
  },
];

export default ReactTS;

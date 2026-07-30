import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Closures = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Advanced/Functions/Closures'));
const Callbacks = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Advanced/Functions/Callbacks'));

const Functions: RouteObject[] = [
  {
    path: '/javascript/advanced/functions/closures',
    element: <Closures />,
  },
  {
    path: '/javascript/advanced/functions/callbacks',
    element: <Callbacks />,
  },
];

export default Functions;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Compass = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Tools/GUIAndCLI/Compass'));
const Atlas = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Tools/GUIAndCLI/Atlas'));

const GUIAndCLI: RouteObject[] = [
  {
    path: '/mongodb/tools/gui-and-cli/compass',
    element: <Compass />,
  },
  {
    path: '/mongodb/tools/gui-and-cli/atlas',
    element: <Atlas />,
  },
];

export default GUIAndCLI;
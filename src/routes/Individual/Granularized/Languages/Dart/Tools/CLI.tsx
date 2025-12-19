import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DartRun = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Tools/CLI/DartRun'));
const DartFormat = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Tools/CLI/DartFormat'));

const CLI: RouteObject[] = [
  {
    path: '/dart/tools/cli/dart-run',
    element: <DartRun />,
  },
  {
    path: '/dart/tools/cli/dart-format',
    element: <DartFormat />,
  },
];

export default CLI;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SeedingAndLocal = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Tools/DevWorkflow/SeedingAndLocal'));
const ConnectionStrings = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/MongoDB/Tools/DevWorkflow/ConnectionStrings'));

const DevWorkflow: RouteObject[] = [
  {
    path: '/mongodb/tools/dev-workflow/seeding-and-local',
    element: <SeedingAndLocal />,
  },
  {
    path: '/mongodb/tools/dev-workflow/connection-strings',
    element: <ConnectionStrings />,
  },
];

export default DevWorkflow;
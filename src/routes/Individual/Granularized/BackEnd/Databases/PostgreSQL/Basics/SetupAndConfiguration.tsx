import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstallingPostgreSQL = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Basics/SetupAndConfiguration/InstallingPostgreSQL'));
const BasicConfiguration = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Basics/SetupAndConfiguration/BasicConfiguration'));
const StarterOptimization = lazy(() => import('@/Pages/MainTabs/BackEnd/Databases/PostgreSQL/Basics/SetupAndConfiguration/StarterOptimization'));

const SetupAndConfiguration: RouteObject[] = [
  {
    path: '/postgresql/basics/setup-and-config/installing',
    element: <InstallingPostgreSQL />,
  },
  {
    path: '/postgresql/basics/setup-and-config/basic-configuration',
    element: <BasicConfiguration />,
  },
  {
    path: '/postgresql/basics/setup-and-config/starter-optimization',
    element: <StarterOptimization />,
  },
];

export default SetupAndConfiguration;

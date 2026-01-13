import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StructureAndNaming = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Basics/Authoring/StructureAndNaming'));
const Assertions = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Testing/Basics/Authoring/Assertions'));

const Authoring: RouteObject[] = [
  {
    path: '/javascript/testing/basics/authoring/structure-and-naming',
    element: <StructureAndNaming />,
  },
  {
    path: '/javascript/testing/basics/authoring/assertions-basics',
    element: <Assertions />,
  },
];

export default Authoring;

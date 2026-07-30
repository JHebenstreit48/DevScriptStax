import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ClassnamesLibrary = lazy(() => import('@/pages/mainTabs/FrontEnd/React/ToolsAndTesting/Tools/Utilities/ClassnamesLibrary'));
const UUIDAndNanoid = lazy(() => import('@/pages/mainTabs/FrontEnd/React/ToolsAndTesting/Tools/Utilities/UUIDAndNanoid'));

const Utilities: RouteObject[] = [
  {
    path: '/react/tools/utilities/classnames',
    element: <ClassnamesLibrary />,
  },
  {
    path: '/react/tools/utilities/ids',
    element: <UUIDAndNanoid />,
  },
];

export default Utilities;

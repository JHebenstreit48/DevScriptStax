import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StyledComponents = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/ToolsAndTesting/Tools/StylingHelpers/StyledComponents'));

const StylingHelpers: RouteObject[] = [
  {
    path: '/react/tools/styling/styled-components',
    element: <StyledComponents />,
  },
];

export default StylingHelpers;

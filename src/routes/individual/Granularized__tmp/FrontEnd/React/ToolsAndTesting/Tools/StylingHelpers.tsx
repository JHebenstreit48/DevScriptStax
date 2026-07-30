import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StyledComponents = lazy(() => import('@/pages/mainTabs/FrontEnd/React/ToolsAndTesting/Tools/StylingHelpers/StyledComponents'));

const StylingHelpers: RouteObject[] = [
  {
    path: '/react/tools/styling/styled-components',
    element: <StyledComponents />,
  },
];

export default StylingHelpers;

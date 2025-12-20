import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OverviewAndTools = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/ToolsAndTesting/Testing/OverviewAndTools'));
const UnitAndIntegrationTesting = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/ToolsAndTesting/Testing/UnitAndIntegrationTesting'));

const Testing: RouteObject[] = [
  {
    path: '/react/testing/overview',
    element: <OverviewAndTools />,
  },
  {
    path: '/react/testing/unit-integration',
    element: <UnitAndIntegrationTesting />,
  },
];

export default Testing;

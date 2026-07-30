import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ESMCommonJSMocking = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Testing/Basics/ModulesAndState/ESMCommonJSMocking'));
const GlobalStateIsolation = lazy(() => import('@/pages/mainTabs/Languages/JavaScript/Testing/Basics/ModulesAndState/GlobalStateIsolation'));

const ModulesAndState: RouteObject[] = [
  {
    path: '/javascript/testing/basics/modules-and-state/esm-commonjs-mocking',
    element: <ESMCommonJSMocking />,
  },
  {
    path: '/javascript/testing/basics/modules-and-state/global-state-isolation',
    element: <GlobalStateIsolation />,
  },
];

export default ModulesAndState;

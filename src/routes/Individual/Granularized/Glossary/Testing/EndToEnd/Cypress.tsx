import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreCommands = lazy(() => import('@/Pages/MainTabs/Glossary/Testing/EndToEnd/Cypress/CoreCommands'));
const TestStructure = lazy(() => import('@/Pages/MainTabs/Glossary/Testing/EndToEnd/Cypress/TestStructure'));

const Switching: RouteObject[] = [
  {
    path: '/glossary/testing/end-to-end/cypress/core-commands',
    element: <CoreCommands />,
  },
  {
    path: '/glossary/testing/end-to-end/cypress/test-structure',
    element: <TestStructure />,
  },
];

export default Switching;
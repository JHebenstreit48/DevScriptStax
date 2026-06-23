import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CoreCommands = lazy(() => import('@/Pages/MainTabs/Glossary/Testing/Cypress/CoreCommands'));
const TestStructure = lazy(() => import('@/Pages/MainTabs/Glossary/Testing/Cypress/TestStructure'));

const Switching: RouteObject[] = [
  {
    path: '/glossary/testing/cypress/core-commands',
    element: <CoreCommands />,
  },
  {
    path: '/glossary/testing/cypress/test-structure',
    element: <TestStructure />,
  },
];

export default Switching;
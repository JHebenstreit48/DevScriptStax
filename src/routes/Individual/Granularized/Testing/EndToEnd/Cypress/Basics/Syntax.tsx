import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TestBlockStructure = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Basics/Syntax/TestBlockStructure'));
const SelectorStrategies = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Basics/Syntax/SelectorStrategies'));
const Assertions = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Basics/Syntax/Assertions'));
const CommandsAndChaining = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Basics/Syntax/CommandsAndChaining'));
const HooksAndLifecycle = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Basics/Syntax/HooksAndLifecycle'));

const Syntax: RouteObject[] = [
  {
    path: '/testing/e2e/cypress/syntax/test-blocks',
    element: <TestBlockStructure />,
  },
  {
    path: '/testing/e2e/cypress/syntax/selector-strategies',
    element: <SelectorStrategies />,
  },
  {
    path: '/testing/e2e/cypress/syntax/assertions',
    element: <Assertions />,
  },
  {
    path: '/testing/e2e/cypress/syntax/commands-chaining',
    element: <CommandsAndChaining />,
  },
  {
    path: '/testing/e2e/cypress/syntax/hooks-lifecycle',
    element: <HooksAndLifecycle />,
  },
];

export default Syntax;

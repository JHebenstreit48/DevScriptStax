import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VisitGet = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Testing/E2E/Cypress/Basics/CoreCommands/VisitGet'
    )
);

const ContainsFind = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Testing/E2E/Cypress/Basics/CoreCommands/ContainsFind'
    )
);

const AssertionsOverview = lazy(
  () =>
    import(
      '@/Pages/MainTabs/Testing/E2E/Cypress/Basics/CoreCommands/Assertions'
    )
);

const CoreCommands: RouteObject[] = [
  {
    path: '/testing/e2e/basics/cypress/commands/visit-get',
    element: <VisitGet />,
  },
  {
    path: '/testing/e2e/basics/cypress/commands/contains-find',
    element: <ContainsFind />,
  },
  {
    path: '/testing/e2e/basics/cypress/commands/assertions',
    element: <AssertionsOverview />,
  },
];

export default CoreCommands;

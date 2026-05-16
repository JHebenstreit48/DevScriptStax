import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AliasingElementsAndRequests = lazy(() => import('@/Pages/MainTabs/Testing/End2End/Cypress/Intermediate/UtilitiesAndNavigation/AliasingElementsAndRequests'));
const WaitingAndTimeouts = lazy(() => import('@/Pages/MainTabs/Testing/End2End/Cypress/Intermediate/UtilitiesAndNavigation/WaitingAndTimeouts'));
const DebuggingAndLogging = lazy(() => import('@/Pages/MainTabs/Testing/End2End/Cypress/Intermediate/UtilitiesAndNavigation/DebuggingAndLogging'));

const UtilitiesAndNavigation: RouteObject[] = [
  {
    path: '/testing/e2e/cypress/aliasing',
    element: <AliasingElementsAndRequests />,
  },
  {
    path: '/testing/e2e/cypress/waiting',
    element: <WaitingAndTimeouts />,
  },
  {
    path: '/testing/e2e/cypress/debugging',
    element: <DebuggingAndLogging />,
  },
];

export default UtilitiesAndNavigation;

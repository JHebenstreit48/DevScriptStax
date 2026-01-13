import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MultiDomainTesting = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Advanced/AdvancedScenarios/MultiDomainTesting'));
const FileUploadsAndDownloads = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Advanced/AdvancedScenarios/FileUploadsAndDownloads'));
const WorkingWithIframes = lazy(() => import('@/Pages/MainTabs/Testing/EndToEnd/Cypress/Advanced/AdvancedScenarios/WorkingWithIframes'));

const AdvancedScenarios: RouteObject[] = [
  {
    path: '/testing/e2e/cypress/multidomain',
    element: <MultiDomainTesting />,
  },
  {
    path: '/testing/e2e/cypress/file-uploads',
    element: <FileUploadsAndDownloads />,
  },
  {
    path: '/testing/e2e/cypress/iframes',
    element: <WorkingWithIframes />,
  },
];

export default AdvancedScenarios;

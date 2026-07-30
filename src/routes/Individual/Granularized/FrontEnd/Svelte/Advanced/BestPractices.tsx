import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CodeOrganization = lazy(() => import('@/pages/mainTabs/FrontEnd/Svelte/Advanced/BestPractices/CodeOrganization'));
const PerformanceOptimization = lazy(() => import('@/pages/mainTabs/FrontEnd/Svelte/Advanced/BestPractices/PerformanceOptimization'));

const BestPractices: RouteObject[] = [
  {
    path: '/svelte/best-practices/code-organization',
    element: <CodeOrganization />,
  },
  {
    path: '/svelte/best-practices/performance',
    element: <PerformanceOptimization />,
  },
];

export default BestPractices;

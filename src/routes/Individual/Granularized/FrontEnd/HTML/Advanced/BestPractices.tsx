import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CodeStandards = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Advanced/BestPractices/CodeStandards'));
const PerformanceOptimization = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Advanced/BestPractices/PerformanceOptimization'));
const SemanticLandmarks = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Advanced/BestPractices/SemanticLandmarks'));
const Accessibility = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Advanced/BestPractices/Accessibility'));

const BestPractices: RouteObject[] = [
  {
    path: '/html/advanced/bestpractices/standards',
    element: <CodeStandards />,
  },
  {
    path: '/html/advanced/bestpractices/performance',
    element: <PerformanceOptimization />,
  },
  {
    path: '/html/advanced/bestpractices/semantic-landmarks-and-outline',
    element: <SemanticLandmarks />,
  },
  {
    path: '/html/advanced/bestpractices/accessibility-patterns',
    element: <Accessibility />,
  },
];

export default BestPractices;
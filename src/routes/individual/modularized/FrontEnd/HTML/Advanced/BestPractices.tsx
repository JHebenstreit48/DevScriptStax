import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CodeStandards = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Advanced/BestPractices/CodeStandards'));
const PerformanceOptimization = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Advanced/BestPractices/PerformanceOptimization'));
const SemanticLandmarks = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Advanced/BestPractices/SemanticLandmarks'));
const Accessibility = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Advanced/BestPractices/Accessibility'));

const BestPractices: RouteObject[] = [
  {
    path: '/front-end/html/advanced/bestpractices/standards',
    element: <CodeStandards />,
  },
  {
    path: '/front-end/html/advanced/bestpractices/performance',
    element: <PerformanceOptimization />,
  },
  {
    path: '/front-end/html/advanced/bestpractices/semantic-landmarks-and-outline',
    element: <SemanticLandmarks />,
  },
  {
    path: '/front-end/html/advanced/bestpractices/accessibility-patterns',
    element: <Accessibility />,
  },
];

export default BestPractices;
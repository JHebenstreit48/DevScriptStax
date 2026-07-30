import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NamingModularityConventions = lazy(() => import('@/pages/mainTabs/Languages/TypeScript/Advanced/BestPractices/PatternsStyle/NamingModularityConventions'));
const Errors = lazy(() => import('@/pages/mainTabs/Languages/TypeScript/Advanced/BestPractices/PatternsStyle/Errors'));

const PatternsStyle: RouteObject[] = [
  {
    path: '/typescript/advanced/best-practices/patterns/naming-conventions',
    element: <NamingModularityConventions />,
  },
  {
    path: '/typescript/advanced/best-practices/patterns/error-handling',
    element: <Errors />,
  },
];

export default PatternsStyle;

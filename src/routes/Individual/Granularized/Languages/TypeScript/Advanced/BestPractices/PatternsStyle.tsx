import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NamingModularityConventions = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/BestPractices/PatternsStyle/NamingModularityConventions'));
const Errors = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/BestPractices/PatternsStyle/Errors'));

const PatternsStyle: RouteObject[] = [
  {
    path: '/typescript/best-practices/patterns/naming-conventions',
    element: <NamingModularityConventions />,
  },
  {
    path: '/typescript/best-practices/patterns/error-handling',
    element: <Errors />,
  },
];

export default PatternsStyle;

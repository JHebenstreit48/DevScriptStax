import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CodingStandards = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/BestPractices/CodingStandards'));
const DebuggingTechniques = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/BestPractices/DebuggingTechniques'));

const BestPractices: RouteObject[] = [
  {
    path: '/javascript/advanced/best-practices/standards',
    element: <CodingStandards />,
  },
  {
    path: '/javascript/advanced/best-practices/debugging',
    element: <DebuggingTechniques />,
  },
];

export default BestPractices;

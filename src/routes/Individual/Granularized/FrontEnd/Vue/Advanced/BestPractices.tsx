import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PerformanceOptimization = lazy(() => import('@/Pages/MainTabs/FrontEnd/Vue/Advanced/BestPractices/PerformanceOptimization'));
const FolderStructure = lazy(() => import('@/Pages/MainTabs/FrontEnd/Vue/Advanced/BestPractices/FolderStructure'));
const Scalability = lazy(() => import('@/Pages/MainTabs/FrontEnd/Vue/Advanced/BestPractices/Scalability'));

const BestPractices: RouteObject[] = [
  {
    path: '/vue/best-practices/performance',
    element: <PerformanceOptimization />,
  },
  {
    path: '/vue/best-practices/structure',
    element: <FolderStructure />,
  },
  {
    path: '/vue/best-practices/scalability',
    element: <Scalability />,
  },
];

export default BestPractices;

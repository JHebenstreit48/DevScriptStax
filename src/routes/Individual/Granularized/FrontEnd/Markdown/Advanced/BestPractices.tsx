import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Consistency = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Advanced/BestPractices/Consistency'));
const Readability = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Advanced/BestPractices/Readability'));
const VersionControl = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Advanced/BestPractices/VersionControl'));

const BestPractices: RouteObject[] = [
  {
    path: '/markdown/advanced/best-practices/consistency',
    element: <Consistency />,
  },
  {
    path: '/markdown/advanced/best-practices/readability',
    element: <Readability />,
  },
  {
    path: '/markdown/advanced/best-practices/version-control',
    element: <VersionControl />,
  },
];

export default BestPractices;

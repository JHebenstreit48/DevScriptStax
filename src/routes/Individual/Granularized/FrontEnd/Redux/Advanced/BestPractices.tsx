import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FolderStructure = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Advanced/BestPractices/FolderStructure'));
const Scalability = lazy(() => import('@/Pages/MainTabs/FrontEnd/Redux/Advanced/BestPractices/Scalability'));

const BestPractices: RouteObject[] = [
  {
    path: '/redux/advanced/best-practices/folder-structure',
    element: <FolderStructure />,
  },
  {
    path: '/redux/advanced/best-practices/scalability',
    element: <Scalability />,
  },
];

export default BestPractices;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FaviconAndTabIcon = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Intermediate/SetupAndEnhancements/FaviconAndTabIcon'));
const PublicFolderUsage = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Intermediate/SetupAndEnhancements/PublicFolderUsage'));

const SetupAndEnhancements: RouteObject[] = [
  {
    path: '/react/intermediate/setup/favicon',
    element: <FaviconAndTabIcon />,
  },
  {
    path: '/react/intermediate/setup/public',
    element: <PublicFolderUsage />,
  },
];

export default SetupAndEnhancements;

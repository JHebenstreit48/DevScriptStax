import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HTTPMocking = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Testing/Integration/HTTPMocking'));
const FileIO = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Testing/Integration/FileIO'));

const Integration: RouteObject[] = [
  {
    path: '/dart/testing/integration/http-mocking',
    element: <HTTPMocking />,
  },
  {
    path: '/dart/testing/integration/file-io',
    element: <FileIO />,
  },
];

export default Integration;

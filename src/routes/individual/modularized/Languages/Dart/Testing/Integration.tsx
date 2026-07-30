import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HTTPMocking = lazy(() => import('@/pages/mainTabs/Languages/Dart/Testing/Integration/HTTPMocking'));
const FileIO = lazy(() => import('@/pages/mainTabs/Languages/Dart/Testing/Integration/FileIO'));

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

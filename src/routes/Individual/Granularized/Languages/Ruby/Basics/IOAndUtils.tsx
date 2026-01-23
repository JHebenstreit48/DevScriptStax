import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FileAndCLI = lazy(() => import('@/Pages/MainTabs/Languages/Ruby/Basics/IOAndUtils/FileAndCLI'));
const StringsAndRegex = lazy(() => import('@/Pages/MainTabs/Languages/Ruby/Basics/IOAndUtils/StringsAndRegex'));

const IOAndUtils: RouteObject[] = [
  {
    path: '/languages/ruby/basics/io-utils/file-cli',
    element: <FileAndCLI />,
  },
  {
    path: '/languages/ruby/basics/io-utils/strings-regex',
    element: <StringsAndRegex />,
  },
];

export default IOAndUtils;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FileAndCLI = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/IOAndData/FileAndCLI'));
const SerdeJSON = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/IOAndData/SerdeJSON'));

const IOAndData: RouteObject[] = [
  {
    path: '/languages/rust/basics/io-data/file-cli',
    element: <FileAndCLI />,
  },
  {
    path: '/languages/rust/basics/io-data/serde-json',
    element: <SerdeJSON />,
  },
];

export default IOAndData;

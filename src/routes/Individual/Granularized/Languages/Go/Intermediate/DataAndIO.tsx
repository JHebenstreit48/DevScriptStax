import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FileIO = lazy(() => import('@/pages/mainTabs/Languages/Go/Intermediate/DataAndIO/FileIO'));
const StreamsAndBufio = lazy(() => import('@/pages/mainTabs/Languages/Go/Intermediate/DataAndIO/StreamsAndBufio'));

const DataAndIO: RouteObject[] = [
  {
    path: '/go/intermediate/data/file-io',
    element: <FileIO />,
  },
  {
    path: '/go/intermediate/data/streams-bufio',
    element: <StreamsAndBufio />,
  },
];

export default DataAndIO;

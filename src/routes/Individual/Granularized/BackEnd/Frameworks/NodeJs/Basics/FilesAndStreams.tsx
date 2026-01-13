import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FileIO = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/FilesAndStreams/FileIO'));
const StreamsBasics = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/NodeJs/Basics/FilesAndStreams/StreamsBasics'));

const FilesAndStreams: RouteObject[] = [
  {
    path: '/backend/frameworks/nodejs/basics/files-streams/file-io',
    element: <FileIO />,
  },
  {
    path: '/backend/frameworks/nodejs/basics/files-streams/streams-basics',
    element: <StreamsBasics />,
  },
];

export default FilesAndStreams;

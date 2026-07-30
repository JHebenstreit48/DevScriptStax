import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SocketIOIntegration = lazy(() => import('@/pages/mainTabs/Stacks/MERN/Advanced/RealtimeAndFiles/SocketIOIntegration'));
const FileUploadsPipeline = lazy(() => import('@/pages/mainTabs/Stacks/MERN/Advanced/RealtimeAndFiles/FileUploadsPipeline'));

const RealtimeAndFiles: RouteObject[] = [
  {
    path: '/mern/advanced/realtime-and-files/socket-io-integration',
    element: <SocketIOIntegration />,
  },
  {
    path: '/mern/advanced/realtime-and-files/file-uploads-pipeline',
    element: <FileUploadsPipeline />,
  },
];

export default RealtimeAndFiles;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Basics = lazy(() => import('@/pages/mainTabs/Languages/Dart/Advanced/Isolates/Basics'));
const MessagePassing = lazy(() => import('@/pages/mainTabs/Languages/Dart/Advanced/Isolates/MessagePassing'));

const Isolates: RouteObject[] = [
  {
    path: '/dart/advanced/isolates/basics',
    element: <Basics />,
  },
  {
    path: '/dart/advanced/isolates/message-passing',
    element: <MessagePassing />,
  },
];

export default Isolates;

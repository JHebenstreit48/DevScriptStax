import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TaskLists = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Intermediate/InteractiveFeatures/TaskLists'));
const Footnotes = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Intermediate/InteractiveFeatures/Footnotes'));

const InteractiveFeatures: RouteObject[] = [
  {
    path: '/markdown/intermediate/interactive-features/task-lists',
    element: <TaskLists />,
  },
  {
    path: '/markdown/intermediate/interactive-features/footnotes',
    element: <Footnotes />,
  },
];

export default InteractiveFeatures;

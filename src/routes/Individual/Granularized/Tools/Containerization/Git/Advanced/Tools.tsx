import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GitStash = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Advanced/Tools/GitStash'));
const GitHooks = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Advanced/Tools/GitHooks'));
const GitSubmodules = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Advanced/Tools/GitSubmodules'));

const Tools: RouteObject[] = [
  {
    path: '/git/advanced/tools/stash',
    element: <GitStash />,
  },
  {
    path: '/git/advanced/tools/hooks',
    element: <GitHooks />,
  },
  {
    path: '/git/advanced/tools/submodules',
    element: <GitSubmodules />,
  },
];

export default Tools;

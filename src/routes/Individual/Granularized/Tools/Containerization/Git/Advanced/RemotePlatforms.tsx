import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GitHub = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Advanced/RemotePlatforms/GitHub'));
const GitLab = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Advanced/RemotePlatforms/GitLab'));
const GitHubAndGitLabCICD = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Git/Advanced/RemotePlatforms/GitHubAndGitLabCICD'));

const RemotePlatforms: RouteObject[] = [
  {
    path: '/git/advanced/remote-platforms/github',
    element: <GitHub />,
  },
  {
    path: '/git/advanced/remote-platforms/gitlab',
    element: <GitLab />,
  },
  {
    path: '/git/advanced/remote-platforms/cicd',
    element: <GitHubAndGitLabCICD />,
  },
];

export default RemotePlatforms;

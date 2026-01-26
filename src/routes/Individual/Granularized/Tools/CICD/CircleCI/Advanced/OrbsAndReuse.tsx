import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UsingOrbsForReusability = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Advanced/OrbsAndReuse/UsingOrbsForReusability'));
const ReusableCommands = lazy(() => import('@/Pages/MainTabs/Tools/CICD/CircleCI/Advanced/OrbsAndReuse/ReusableCommands'));

const OrbsAndReuse: RouteObject[] = [
  {
    path: '/ci-cd/circle-ci/advanced/orbs-and-reuse/orbs',
    element: <UsingOrbsForReusability />,
  },
  {
    path: '/ci-cd/circle-ci/advanced/orbs-and-reuse/reusable-commands',
    element: <ReusableCommands />,
  },
];

export default OrbsAndReuse;

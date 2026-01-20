import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RepoLayouts = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Advanced/Monorepos/RepoLayouts'));
const Turborepo = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Advanced/Monorepos/Turborepo'));

const Monorepos: RouteObject[] = [
  {
    path: '/vercel/advanced/monorepos/repo-layouts',
    element: <RepoLayouts />,
  },
  {
    path: '/vercel/advanced/monorepos/turborepo',
    element: <Turborepo />,
  },
];

export default Monorepos;

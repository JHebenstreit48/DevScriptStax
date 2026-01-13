import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProfilesAndOverrides = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Advanced/ComposeAdvanced/ProfilesAndOverrides'));
const ProdDeployAndEnvFiles = lazy(() => import('@/Pages/MainTabs/Tools/Containerization/Docker/Advanced/ComposeAdvanced/ProdDeployAndEnvFiles'));

const ComposeAdvanced: RouteObject[] = [
  {
    path: '/tools/containerization/docker/advanced/compose/profiles-overrides',
    element: <ProfilesAndOverrides />,
  },
  {
    path: '/tools/containerization/docker/advanced/compose/prod-env',
    element: <ProdDeployAndEnvFiles />,
  },
];

export default ComposeAdvanced;

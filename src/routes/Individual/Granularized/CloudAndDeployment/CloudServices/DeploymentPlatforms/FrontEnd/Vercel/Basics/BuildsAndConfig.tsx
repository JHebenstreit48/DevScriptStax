import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VercelJson = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/BuildsAndConfig/VercelJson'));
const FrameworkPresets = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics/BuildsAndConfig/FrameworkPresets'));

const BuildsAndConfig: RouteObject[] = [
  {
    path: '/vercel/basics/builds-config/vercel-json',
    element: <VercelJson />,
  },
  {
    path: '/vercel/basics/builds-config/framework-presets',
    element: <FrameworkPresets />,
  },
];

export default BuildsAndConfig;

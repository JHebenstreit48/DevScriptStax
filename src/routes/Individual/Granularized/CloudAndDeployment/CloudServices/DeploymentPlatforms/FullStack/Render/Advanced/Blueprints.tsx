import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RenderYaml = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/Blueprints/RenderYaml'));
const MonoreposAndMultiService = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/Blueprints/MonoreposAndMultiService'));

const Blueprints: RouteObject[] = [
  {
    path: '/render/advanced/blueprints/intro',
    element: <RenderYaml />,
  },
  {
    path: '/render/advanced/blueprints/monorepos',
    element: <MonoreposAndMultiService />,
  },
];

export default Blueprints;

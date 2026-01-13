import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DockerImages = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/AdvancedTopics/DockerImages'));
const WebSockets = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/AdvancedTopics/WebSockets'));
const Backups = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced/AdvancedTopics/Backups'));

const AdvancedTopics: RouteObject[] = [
  {
    path: '/render/advanced/advanced-topics/docker-images',
    element: <DockerImages />,
  },
  {
    path: '/render/advanced/advanced-topics/websockets',
    element: <WebSockets />,
  },
  {
    path: '/render/advanced/advanced-topics/backups',
    element: <Backups />,
  },
];

export default AdvancedTopics;

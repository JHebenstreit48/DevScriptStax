import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const APIsAndIntegrations = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Architecture/APIsAndIntegrations'));
const EventDriven = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced/Architecture/EventDriven'));

const Architecture: RouteObject[] = [
  {
    path: '/aws-sam/advanced/architecture/apis-integrations',
    element: <APIsAndIntegrations />,
  },
  {
    path: '/aws-sam/advanced/architecture/event-driven',
    element: <EventDriven />,
  },
];

export default Architecture;

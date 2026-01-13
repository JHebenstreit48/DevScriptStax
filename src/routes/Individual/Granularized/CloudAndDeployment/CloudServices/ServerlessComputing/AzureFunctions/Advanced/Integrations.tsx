import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const APIManagement = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Integrations/APIManagement'));
const EventGridAndStorage = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced/Integrations/EventGridAndStorage'));

const Integrations: RouteObject[] = [
  {
    path: '/azure-functions/advanced/integrations/api-management',
    element: <APIManagement />,
  },
  {
    path: '/azure-functions/advanced/integrations/event-grid-storage',
    element: <EventGridAndStorage />,
  },
];

export default Integrations;

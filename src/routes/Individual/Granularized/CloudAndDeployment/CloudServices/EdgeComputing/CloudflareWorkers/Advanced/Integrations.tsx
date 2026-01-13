import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PagesIntegration = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/Integrations/PagesIntegration'));
const R2AndD1 = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Advanced/Integrations/R2AndD1'));

const Integrations: RouteObject[] = [
  {
    path: '/cloudflare-workers/advanced/integrations/pages-integration',
    element: <PagesIntegration />,
  },
  {
    path: '/cloudflare-workers/advanced/integrations/r2-d1',
    element: <R2AndD1 />,
  },
];

export default Integrations;

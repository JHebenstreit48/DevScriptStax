import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DevAndPreview = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Deploys/DevAndPreview'));
const ProductionDeploys = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers/Basics/Deploys/ProductionDeploys'));

const Deploys: RouteObject[] = [
  {
    path: '/cloudflare-workers/basics/deploys/dev-preview',
    element: <DevAndPreview />,
  },
  {
    path: '/cloudflare-workers/basics/deploys/production-deploys',
    element: <ProductionDeploys />,
  },
];

export default Deploys;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CacheRules = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/Performance/CacheRules'));
const ImageResizing = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/CloudflarePages/Advanced/Performance/ImageResizing'));

const Performance: RouteObject[] = [
  {
    path: '/cloudflare-pages/advanced/performance/cache-rules',
    element: <CacheRules />,
  },
  {
    path: '/cloudflare-pages/advanced/performance/image-resizing',
    element: <ImageResizing />,
  },
];

export default Performance;

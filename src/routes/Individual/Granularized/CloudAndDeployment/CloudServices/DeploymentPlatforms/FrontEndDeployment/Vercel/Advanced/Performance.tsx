import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ImageOptimization = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/Performance/ImageOptimization'));
const CachingStrategies = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndDeployment/Vercel/Advanced/Performance/CachingStrategies'));

const Performance: RouteObject[] = [
  {
    path: '/vercel/advanced/performance/image-optimization',
    element: <ImageOptimization />,
  },
  {
    path: '/vercel/advanced/performance/caching-strategies',
    element: <CachingStrategies />,
  },
];

export default Performance;

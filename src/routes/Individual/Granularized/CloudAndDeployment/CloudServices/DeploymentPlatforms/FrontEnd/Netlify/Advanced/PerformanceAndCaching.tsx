import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ImageCDNAndOptimization = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced/PerformanceAndCaching/ImageCDNAndOptimization'));
const CachingStrategies = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced/PerformanceAndCaching/CachingStrategies'));

const PerformanceAndCaching: RouteObject[] = [
  {
    path: '/netlify/advanced/performance-caching/image-optimization',
    element: <ImageCDNAndOptimization />,
  },
  {
    path: '/netlify/advanced/performance-caching/caching-strategies',
    element: <CachingStrategies />,
  },
];

export default PerformanceAndCaching;

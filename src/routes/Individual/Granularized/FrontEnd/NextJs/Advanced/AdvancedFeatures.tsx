import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IncrementalStaticRegeneration = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Advanced/AdvancedFeatures/IncrementalStaticRegeneration'));
const ImageOptimization = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Advanced/AdvancedFeatures/ImageOptimization'));
const APIIntegrations = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Advanced/AdvancedFeatures/APIIntegrations'));
const CustomServer = lazy(() => import('@/Pages/MainTabs/FrontEnd/NextJs/Advanced/AdvancedFeatures/CustomServer'));

const AdvancedFeatures: RouteObject[] = [
  {
    path: '/nextjs/advanced/isr',
    element: <IncrementalStaticRegeneration />,
  },
  {
    path: '/nextjs/advanced/image-optimization',
    element: <ImageOptimization />,
  },
  {
    path: '/nextjs/advanced/api-integrations',
    element: <APIIntegrations />,
  },
  {
    path: '/nextjs/advanced/custom-server',
    element: <CustomServer />,
  },
];

export default AdvancedFeatures;

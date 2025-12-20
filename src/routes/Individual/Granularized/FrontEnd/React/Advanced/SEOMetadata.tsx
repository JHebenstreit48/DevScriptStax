import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RenderingMarkdown = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Advanced/SEOMetadata/RenderingMarkdown'));
const OpenGraphAndSharing = lazy(() => import('@/Pages/MainTabs/FrontEnd/React/Advanced/SEOMetadata/OpenGraphAndSharing'));

const SEOMetadata: RouteObject[] = [
  {
    path: '/react/advanced/seo/markdown',
    element: <RenderingMarkdown />,
  },
  {
    path: '/react/advanced/seo/opengraph',
    element: <OpenGraphAndSharing />,
  },
];

export default SEOMetadata;

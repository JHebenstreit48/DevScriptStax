import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Security = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Advanced/SecurityAndSEO/Security'));
const SEOAndMetadata = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Advanced/SecurityAndSEO/SEOAndMetadata'));

const SecurityAndSEO: RouteObject[] = [
  {
    path: '/gatsby/advanced/security-seo/security',
    element: <Security />,
  },
  {
    path: '/gatsby/advanced/security-seo/seo-and-metadata',
    element: <SEOAndMetadata />,
  },
];

export default SecurityAndSEO;

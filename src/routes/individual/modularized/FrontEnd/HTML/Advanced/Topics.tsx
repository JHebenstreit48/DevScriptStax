import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Features = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Advanced/Topics/Features'));
const WebAccessibility = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Advanced/Topics/WebAccessibility'));
const SEOBestPractices = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Advanced/Topics/SEO'));
const TemplatesAndSlots = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Advanced/Topics/TemplatesAndSlots'));
const ResourceHintsAndPreloading = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Advanced/Topics/ResourceHintsAndPreloading'));
const SecurityAndLinking = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Advanced/Topics/SecurityAndLink'));
const SocialMetadata = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Advanced/Topics/SocialMetadata'));

const Topics: RouteObject[] = [
  {
    path: '/front-end/html/advanced/topics/html5-features',
    element: <Features />,
  },
  {
    path: '/front-end/html/advanced/topics/accessibility',
    element: <WebAccessibility />,
  },
  {
    path: '/front-end/html/advanced/topics/seo-best-practices',
    element: <SEOBestPractices />,
  },
  {
    path: '/front-end/html/advanced/topics/templates-and-slots',
    element: <TemplatesAndSlots />,
  },
  {
    path: '/front-end/html/advanced/topics/resource-hints-and-preloading',
    element: <ResourceHintsAndPreloading />,
  },
  {
    path: '/front-end/html/advanced/topics/security-and-linking',
    element: <SecurityAndLinking />,
  },
  {
    path: '/front-end/html/advanced/topics/social-metadata',
    element: <SocialMetadata />,
  },
];

export default Topics;

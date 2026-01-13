import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Features = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Advanced/Topics/Features'));
const WebAccessibility = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Advanced/Topics/WebAccessibility'));
const SEOBestPractices = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Advanced/Topics/SEO'));
const TemplatesAndSlots = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Advanced/Topics/TemplatesAndSlots'));
const ResourceHintsAndPreloading = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Advanced/Topics/ResourceHintsAndPreloading'));
const SecurityAndLinking = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Advanced/Topics/SecurityAndLink'));
const SocialMetadata = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Advanced/Topics/SocialMetadata'));

const Topics: RouteObject[] = [
  {
    path: '/html/advanced/topics/html5-features',
    element: <Features />,
  },
  {
    path: '/html/advanced/topics/accessibility',
    element: <WebAccessibility />,
  },
  {
    path: '/html/advanced/topics/seo-best-practices',
    element: <SEOBestPractices />,
  },
  {
    path: '/html/advanced/topics/templates-and-slots',
    element: <TemplatesAndSlots />,
  },
  {
    path: '/html/advanced/topics/resource-hints-and-preloading',
    element: <ResourceHintsAndPreloading />,
  },
  {
    path: '/html/advanced/topics/security-and-linking',
    element: <SecurityAndLinking />,
  },
  {
    path: '/html/advanced/topics/social-metadata',
    element: <SocialMetadata />,
  },
];

export default Topics;

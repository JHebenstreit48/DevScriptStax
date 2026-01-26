import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Caching = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/PerformanceAndCaching/Caching'));
const ETagsAndConditionalGET = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/PerformanceAndCaching/ETagsAndConditionalGET'));

const PerformanceAndCaching: RouteObject[] = [
  {
    path: '/frameworks/ruby-on-rails/advanced/performance-caching/caching',
    element: <Caching />,
  },
  {
    path: '/frameworks/ruby-on-rails/advanced/performance-caching/etags-conditional',
    element: <ETagsAndConditionalGET />,
  },
];

export default PerformanceAndCaching;

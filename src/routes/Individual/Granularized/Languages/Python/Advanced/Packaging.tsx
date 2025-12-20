import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Distributions = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Packaging/Distributions'));
const Publishing = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Packaging/Publishing'));

const Packaging: RouteObject[] = [
  {
    path: '/python/advanced/packaging/distributions',
    element: <Distributions />,
  },
  {
    path: '/python/advanced/packaging/publishing',
    element: <Publishing />,
  },
];

export default Packaging;

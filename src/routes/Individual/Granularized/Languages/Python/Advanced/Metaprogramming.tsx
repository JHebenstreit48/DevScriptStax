import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DecoratorsAndDescriptors = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Metaprogramming/DecoratorsAndDescriptors'));
const Metaclasses = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Metaprogramming/Metaclasses'));

const Metaprogramming: RouteObject[] = [
  {
    path: '/python/advanced/metaprogramming/decorators-descriptors',
    element: <DecoratorsAndDescriptors />,
  },
  {
    path: '/python/advanced/metaprogramming/metaclasses',
    element: <Metaclasses />,
  },
];

export default Metaprogramming;

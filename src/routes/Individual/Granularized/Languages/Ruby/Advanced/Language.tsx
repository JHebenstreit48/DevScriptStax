import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Metaprogramming = lazy(() => import('@/Pages/MainTabs/Languages/Ruby/Advanced/Language/Metaprogramming'));
const MixinsAndRefinements = lazy(() => import('@/Pages/MainTabs/Languages/Ruby/Advanced/Language/MixinsAndRefinements'));
const EnumeratorsAndLazy = lazy(() => import('@/Pages/MainTabs/Languages/Ruby/Advanced/Language/EnumeratorsAndLazy'));

const Language: RouteObject[] = [
  {
    path: '/languages/ruby/advanced/language/metaprogramming',
    element: <Metaprogramming />,
  },
  {
    path: '/languages/ruby/advanced/language/mixins-refinements',
    element: <MixinsAndRefinements />,
  },
  {
    path: '/languages/ruby/advanced/language/enumerators-lazy',
    element: <EnumeratorsAndLazy />,
  },
];

export default Language;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const N1AndDataLoaderPattern = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Advanced/Performance/N1AndDataLoaderPattern'));
const CachingConcepts = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Advanced/Performance/CachingConcepts'));

const Performance: RouteObject[] = [
  {
    path: '/graphql/advanced/performance/n-plus-one-dataloader',
    element: <N1AndDataLoaderPattern />,
  },
  {
    path: '/graphql/advanced/performance/caching-concepts',
    element: <CachingConcepts />,
  },
];

export default Performance;

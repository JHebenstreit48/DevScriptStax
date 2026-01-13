import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CustomScalars = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Advanced/CustomScalars'));
const Directives = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Advanced/Directives'));
const Performance = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Advanced/Performance'));
const Federation = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Advanced/Federation'));

const Advanced: RouteObject[] = [
  {
    path: '/graphql/advanced/customscalars',
    element: <CustomScalars />,
  },
  {
    path: '/graphql/advanced/directives',
    element: <Directives />,
  },
  {
    path: '/graphql/advanced/performance',
    element: <Performance />,
  },
  {
    path: '/graphql/advanced/federation',
    element: <Federation />,
  },
];

export default Advanced;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StudioMetrics = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/Observability/StudioMetrics'));
const Tracing = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/Observability/Tracing'));

const Observability: RouteObject[] = [
  {
    path: '/apollo/server/advanced/observability/studio-metrics',
    element: <StudioMetrics />,
  },
  {
    path: '/apollo/server/advanced/observability/tracing',
    element: <Tracing />,
  },
];

export default Observability;

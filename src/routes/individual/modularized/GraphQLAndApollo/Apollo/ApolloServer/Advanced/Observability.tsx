import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StudioMetrics = lazy(() => import('@/pages/mainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/Observability/StudioMetrics'));
const Tracing = lazy(() => import('@/pages/mainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/Observability/Tracing'));

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

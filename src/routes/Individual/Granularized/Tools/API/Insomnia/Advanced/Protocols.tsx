import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GraphQLInInsomnia = lazy(() => import('@/Pages/MainTabs/Tools/API/Insomnia/Advanced/Protocols/GraphQLInInsomnia'));
const GRPCAndWS = lazy(() => import('@/Pages/MainTabs/Tools/API/Insomnia/Advanced/Protocols/GRPCAndWS'));

const Protocols: RouteObject[] = [
  {
    path: '/tools/api/insomnia/advanced/protocols/graphql-in-insomnia',
    element: <GraphQLInInsomnia />,
  },
  {
    path: '/tools/api/insomnia/advanced/protocols/grpc-ws',
    element: <GRPCAndWS />,
  },
];

export default Protocols;

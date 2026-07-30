import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GraphQLInPostman = lazy(() => import('@/pages/mainTabs/Tools/API/Postman/Advanced/Protocols/GraphQLInPostman'));
const GRPCAndWS = lazy(() => import('@/pages/mainTabs/Tools/API/Postman/Advanced/Protocols/GRPCAndWS'));

const Protocols: RouteObject[] = [
  {
    path: '/tools/api/postman/advanced/protocols/graphql-in-postman',
    element: <GraphQLInPostman />,
  },
  {
    path: '/tools/api/postman/advanced/protocols/grpc-ws',
    element: <GRPCAndWS />,
  },
];

export default Protocols;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Schema = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Basics/SchemaAndResolvers/Schema'));
const Resolvers = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Basics/SchemaAndResolvers/Resolvers'));

const SchemaAndResolvers: RouteObject[] = [
  {
    path: '/apollo/server/basics/schema-resolvers/schema',
    element: <Schema />,
  },
  {
    path: '/apollo/server/basics/schema-resolvers/resolvers',
    element: <Resolvers />,
  },
];

export default SchemaAndResolvers;

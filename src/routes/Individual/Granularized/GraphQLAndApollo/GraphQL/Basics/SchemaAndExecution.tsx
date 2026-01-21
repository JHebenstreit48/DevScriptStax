import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Schema = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Basics/SchemaAndExecution/Schema'));
const Resolvers = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Basics/SchemaAndExecution/Resolvers'));

const SchemaAndExecution: RouteObject[] = [
  {
    path: '/graphql/basics/schema-execution/schema',
    element: <Schema />,
  },
  {
    path: '/graphql/basics/schema-execution/resolvers',
    element: <Resolvers />,
  },
];

export default SchemaAndExecution;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ChecksAndContracts = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/SchemaGovernance/ChecksAndContracts'));
const OperationRegistry = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/SchemaGovernance/OperationRegistry'));

const SchemaGovernance: RouteObject[] = [
  {
    path: '/graphqlandapollo/apollo/server/advanced/schema-governance/checks-contracts',
    element: <ChecksAndContracts />,
  },
  {
    path: '/graphqlandapollo/apollo/server/advanced/schema-governance/operation-registry',
    element: <OperationRegistry />,
  },
];

export default SchemaGovernance;

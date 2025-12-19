import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FetchPolicies = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/CacheAndPolicies/FetchPolicies'));
const FieldPolicies = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Advanced/CacheAndPolicies/FieldPolicies'));

const CacheAndPolicies: RouteObject[] = [
  {
    path: '/graphqlandapollo/apollo/client/advanced/cache-policies/fetch-policies',
    element: <FetchPolicies />,
  },
  {
    path: '/graphqlandapollo/apollo/client/advanced/cache-policies/field-policies',
    element: <FieldPolicies />,
  },
];

export default CacheAndPolicies;

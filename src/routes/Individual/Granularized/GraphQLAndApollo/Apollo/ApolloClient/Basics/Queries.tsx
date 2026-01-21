import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UseQuery = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Basics/Queries/UseQuery'));
const VariablesAndHeaders = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Basics/Queries/VariablesAndHeaders'));

const Queries: RouteObject[] = [
  {
    path: '/apollo/client/basics/queries/usequery',
    element: <UseQuery />,
  },
  {
    path: '/apollo/client/basics/queries/variables-headers',
    element: <VariablesAndHeaders />,
  },
];

export default Queries;

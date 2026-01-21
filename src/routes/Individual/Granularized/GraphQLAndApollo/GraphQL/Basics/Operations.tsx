import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Queries = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Basics/Operations/Queries'));
const Mutations = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Basics/Operations/Mutations'));

const Operations: RouteObject[] = [
  {
    path: '/graphql/basics/operations/queries',
    element: <Queries />,
  },
  {
    path: '/graphql/basics/operations/mutations',
    element: <Mutations />,
  },
];

export default Operations;

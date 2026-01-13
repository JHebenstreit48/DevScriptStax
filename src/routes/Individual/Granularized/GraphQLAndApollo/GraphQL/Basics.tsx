import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Basics/Introduction'));
const Queries = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Basics/Queries'));
const Mutations = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Basics/Mutations'));
const Subscriptions = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Basics/Subscriptions'));
const Schema = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Basics/Schema'));

const Basics: RouteObject[] = [
  {
    path: '/graphql/basics/introduction',
    element: <Introduction />,
  },
  {
    path: '/graphql/basics/queries',
    element: <Queries />,
  },
  {
    path: '/graphql/basics/mutations',
    element: <Mutations />,
  },
  {
    path: '/graphql/basics/subscriptions',
    element: <Subscriptions />,
  },
  {
    path: '/graphql/basics/schema',
    element: <Schema />,
  },
];

export default Basics;

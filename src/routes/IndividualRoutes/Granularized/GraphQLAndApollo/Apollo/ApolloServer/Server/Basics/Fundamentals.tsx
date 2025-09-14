import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Basics/Fundamentals/Introduction')
);
const Setup = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Basics/Fundamentals/Setup'));

const Basics: RouteObject[] = [
  {
    path: '/apollo/server/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/apollo/server/basics/fundamentals/install-setup',
    element: <Setup />,
  },
];

export default Basics;
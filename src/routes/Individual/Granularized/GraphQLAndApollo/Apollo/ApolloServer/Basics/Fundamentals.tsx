import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Basics/Fundamentals/Introduction'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Basics/Fundamentals/InstallAndSetup'));

const Fundamentals: RouteObject[] = [
  {
    path: '/apollo/server/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/apollo/server/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
];

export default Fundamentals;

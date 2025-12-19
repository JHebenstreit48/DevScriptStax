import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Basics/GettingStarted/Introduction'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Basics/GettingStarted/InstallAndSetup'));

const GettingStarted: RouteObject[] = [
  {
    path: '/graphqlandapollo/apollo/client/basics/getting-started/introduction',
    element: <Introduction />,
  },
  {
    path: '/graphqlandapollo/apollo/client/basics/getting-started/install-setup',
    element: <InstallAndSetup />,
  },
];

export default GettingStarted;

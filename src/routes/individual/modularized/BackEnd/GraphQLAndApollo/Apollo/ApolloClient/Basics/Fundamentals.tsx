import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/BackEnd/GraphQLAndApollo/Apollo/ApolloClient/Basics/Fundamentals/Introduction'));
const InstallAndSetup = lazy(() => import('@/pages/mainTabs/BackEnd/GraphQLAndApollo/Apollo/ApolloClient/Basics/Fundamentals/InstallAndSetup'));

const Fundamentals: RouteObject[] = [
  {
    path: '/apollo/client/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/apollo/client/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
];

export default Fundamentals;

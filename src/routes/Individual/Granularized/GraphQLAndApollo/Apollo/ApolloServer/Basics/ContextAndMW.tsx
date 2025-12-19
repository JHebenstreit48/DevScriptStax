import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Context = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Basics/ContextAndMW/Context'));
const Middleware = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Basics/ContextAndMW/Middleware'));

const ContextAndMW: RouteObject[] = [
  {
    path: '/apollo/server/basics/context-mw/context',
    element: <Context />,
  },
  {
    path: '/apollo/server/basics/context-mw/middleware',
    element: <Middleware />,
  },
];

export default ContextAndMW;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SDLFiles = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Basics/SchemaDelivery/SDLFiles'));
const CodeFirst = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Basics/SchemaDelivery/CodeFirst'));

const SchemaDelivery: RouteObject[] = [
  {
    path: '/apollo/server/basics/schema-delivery/sdl-files',
    element: <SDLFiles />,
  },
  {
    path: '/apollo/server/basics/schema-delivery/code-first',
    element: <CodeFirst />,
  },
];

export default SchemaDelivery;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Basics/Fundamentals/Introduction'));
const KeyConcepts = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Basics/Fundamentals/KeyConcepts'));

const Fundamentals: RouteObject[] = [
  {
    path: '/graphql/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/graphql/basics/fundamentals/key-concepts',
    element: <KeyConcepts />,
  },
];

export default Fundamentals;

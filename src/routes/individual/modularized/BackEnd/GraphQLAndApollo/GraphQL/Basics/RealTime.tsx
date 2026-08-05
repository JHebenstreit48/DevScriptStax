import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Subscriptions = lazy(() => import('@/pages/mainTabs/BackEnd/GraphQLAndApollo/GraphQL/Basics/RealTime/Subscriptions'));
const VariablesAndFragments = lazy(() => import('@/pages/mainTabs/BackEnd/GraphQLAndApollo/GraphQL/Basics/RealTime/VariablesAndFragments'));

const RealTime: RouteObject[] = [
  {
    path: '/graphql/basics/real-time/subscriptions',
    element: <Subscriptions />,
  },
  {
    path: '/graphql/basics/real-time/variables-fragments',
    element: <VariablesAndFragments />,
  },
];

export default RealTime;

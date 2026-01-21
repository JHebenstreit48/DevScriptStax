import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UseMutation = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Basics/Mutations/UseMutation'));
const OptimisticUI = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloClient/Basics/Mutations/OptimisticUI'));

const Mutations: RouteObject[] = [
  {
    path: '/apollo/client/basics/mutations/usemutation',
    element: <UseMutation />,
  },
  {
    path: '/apollo/client/basics/mutations/optimistic-ui',
    element: <OptimisticUI />,
  },
];

export default Mutations;

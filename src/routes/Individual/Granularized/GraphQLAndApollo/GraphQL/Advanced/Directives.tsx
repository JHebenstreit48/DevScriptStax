import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuiltInDirectives = lazy(() => import('@/pages/mainTabs/GraphQLAndApollo/GraphQL/Advanced/Directives/BuiltInDirectives'));
const CustomDirectives = lazy(() => import('@/pages/mainTabs/GraphQLAndApollo/GraphQL/Advanced/Directives/CustomDirectives'));

const Directives: RouteObject[] = [
  {
    path: '/graphql/advanced/directives/built-in',
    element: <BuiltInDirectives />,
  },
  {
    path: '/graphql/advanced/directives/custom',
    element: <CustomDirectives />,
  },
];

export default Directives;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FederationConcepts = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Advanced/Composition/FederationConcepts'));
const SchemaStitchingConcepts = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Advanced/Composition/SchemaStitchingConcepts'));

const Composition: RouteObject[] = [
  {
    path: '/graphql/advanced/composition/federation-concepts',
    element: <FederationConcepts />,
  },
  {
    path: '/graphql/advanced/composition/schema-stitching',
    element: <SchemaStitchingConcepts />,
  },
];

export default Composition;

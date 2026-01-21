import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CustomScalars = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Advanced/SchemaDesign/CustomScalars'));
const InterfacesAndUnions = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/GraphQL/Advanced/SchemaDesign/InterfacesAndUnions'));

const SchemaDesign: RouteObject[] = [
  {
    path: '/graphql/advanced/schema-design/custom-scalars',
    element: <CustomScalars />,
  },
  {
    path: '/graphql/advanced/schema-design/interfaces-unions',
    element: <InterfacesAndUnions />,
  },
];

export default SchemaDesign;

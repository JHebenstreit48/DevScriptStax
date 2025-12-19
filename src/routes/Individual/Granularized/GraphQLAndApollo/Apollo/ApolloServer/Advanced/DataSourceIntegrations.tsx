import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RESTDataSource = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/DataSourceIntegrations/RESTDataSource'));
const CustomDataSource = lazy(() => import('@/Pages/MainTabs/GraphQLAndApollo/Apollo/ApolloServer/Advanced/DataSourceIntegrations/CustomDataSource'));

const DataSourceIntegrations: RouteObject[] = [
  {
    path: '/graphqlandapollo/apollo/server/advanced/datasource-integrations/rest-datasource',
    element: <RESTDataSource />,
  },
  {
    path: '/graphqlandapollo/apollo/server/advanced/datasource-integrations/custom',
    element: <CustomDataSource />,
  },
];

export default DataSourceIntegrations;

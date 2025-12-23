import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GraphQLDataLayer = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Basics/CoreConcepts/GraphQLDataLayer'));
const FileRoutingAndPages = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Basics/CoreConcepts/FileRoutingAndPages'));
const LayoutsAndHeadAPI = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Basics/CoreConcepts/LayoutsAndHeadAPI'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/gatsby/basics/core-concepts/graphql-data-layer',
    element: <GraphQLDataLayer />,
  },
  {
    path: '/gatsby/basics/core-concepts/file-routing-and-pages',
    element: <FileRoutingAndPages />,
  },
  {
    path: '/gatsby/basics/core-concepts/layouts-and-head-api',
    element: <LayoutsAndHeadAPI />,
  },
];

export default CoreConcepts;

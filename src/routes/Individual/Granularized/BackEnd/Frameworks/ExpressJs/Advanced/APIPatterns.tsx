import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RESTInExpress = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/APIPatterns/RESTInExpress'));
const GraphQL = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/ExpressJs/Advanced/APIPatterns/GraphQL'));

const APIPatterns: RouteObject[] = [
  {
    path: '/backend/frameworks/express/advanced/api-patterns/rest-in-express',
    element: <RESTInExpress />,
  },
  {
    path: '/backend/frameworks/express/advanced/api-patterns/graphql-express',
    element: <GraphQL />,
  },
];

export default APIPatterns;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RESTInFlask = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/APIPatterns/RESTInFlask'));
const GraphQL = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Flask/Advanced/APIPatterns/GraphQL'));

const APIPatterns: RouteObject[] = [
  {
    path: '/backend/frameworks/flask/advanced/api-patterns/rest-in-flask',
    element: <RESTInFlask />,
  },
  {
    path: '/backend/frameworks/flask/advanced/api-patterns/graphql-flask',
    element: <GraphQL />,
  },
];

export default APIPatterns;

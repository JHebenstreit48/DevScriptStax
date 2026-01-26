import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RESTInKoa = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Advanced/APIPatterns/RESTInKoa'));
const GraphQL = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/KoaJs/Advanced/APIPatterns/GraphQL'));

const APIPatterns: RouteObject[] = [
  {
    path: '/frameworks/koa/advanced/api-patterns/rest-in-koa',
    element: <RESTInKoa />,
  },
  {
    path: '/frameworks/koa/advanced/api-patterns/graphql-koa',
    element: <GraphQL />,
  },
];

export default APIPatterns;

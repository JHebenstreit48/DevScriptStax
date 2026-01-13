import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ResourceNamingConventions = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/RESTfulDesignPrinciples/ResourceNamingConventions'));
const Versioning = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/RESTfulDesignPrinciples/Versioning'));
const HATEOASAndHypermedia = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/RESTfulDesignPrinciples/HATEOASAndHypermedia'));
const SecurityBestPractices = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/REST/RESTfulDesignPrinciples/SecurityBestPractices'));

const RESTfulDesignPrinciples: RouteObject[] = [
  {
    path: '/apis/rest/design/resource-naming',
    element: <ResourceNamingConventions />,
  },
  {
    path: '/apis/rest/design/versioning',
    element: <Versioning />,
  },
  {
    path: '/apis/rest/design/hateoas',
    element: <HATEOASAndHypermedia />,
  },
  {
    path: '/apis/rest/design/security',
    element: <SecurityBestPractices />,
  },
];

export default RESTfulDesignPrinciples;

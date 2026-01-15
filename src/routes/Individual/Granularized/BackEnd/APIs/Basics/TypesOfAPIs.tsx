import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PublicVsPrivate = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/TypesOfAPIs/PubVSPrivate'));
const RestVSGraphVSSoap = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Basics/TypesOfAPIs/RestVSGraphVSSOAP'));
const MicroservicesAndAPIBasedArchitectures = lazy(
  () => import('@/Pages/MainTabs/BackEnd/APIs/Basics/TypesOfAPIs/MicroservicesAndAPIBasedArchitectures')
);
const ThirdPartyAPIIntegrations = lazy(
  () => import('@/Pages/MainTabs/BackEnd/APIs/Basics/TypesOfAPIs/ThirdPartyAPIIntegrations')
);

const TypesOfAPIs: RouteObject[] = [
  {
    path: '/apis/basics/types/public-vs-private',
    element: <PublicVsPrivate />,
  },
  {
    path: '/apis/basics/types/rest-vs-graphql-vs-soap',
    element: <RestVSGraphVSSoap />,
  },
  {
    path: '/apis/basics/types/microservices',
    element: <MicroservicesAndAPIBasedArchitectures />,
  },
  {
    path: '/apis/basics/types/third-party',
    element: <ThirdPartyAPIIntegrations />,
  },
];

export default TypesOfAPIs;
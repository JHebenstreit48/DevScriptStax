import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const APIVersioningStrategies = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Advanced/Versioning/APIVersioningStrategies'));
const VersioningInRESTVsGraphQL = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Advanced/Versioning/VersioningInRESTVsGraphQL'));
const DeprecatingOldAPIVersions = lazy(() => import('@/Pages/MainTabs/BackEnd/APIs/Advanced/Versioning/DeprecatingOldAPIVersions'));

const Versioning: RouteObject[] = [
  {
    path: '/apis/advanced/versioning/strategies',
    element: <APIVersioningStrategies />,
  },
  {
    path: '/apis/advanced/versioning/rest-vs-graphql',
    element: <VersioningInRESTVsGraphQL />,
  },
  {
    path: '/apis/advanced/versioning/deprecating',
    element: <DeprecatingOldAPIVersions />,
  },
];

export default Versioning;

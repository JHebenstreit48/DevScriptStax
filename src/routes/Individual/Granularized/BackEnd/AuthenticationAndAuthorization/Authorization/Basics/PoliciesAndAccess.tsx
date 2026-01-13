import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StaticDynamicRules = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/PoliciesAndAccess/StaticDynamicRules'));
const HierarchicalRoles = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/PoliciesAndAccess/HierarchicalRoles'));

const PoliciesAndAccess: RouteObject[] = [
  {
    path: '/authz/basics/policies/static-dynamic',
    element: <StaticDynamicRules />,
  },
  {
    path: '/authz/basics/policies/roles-hierarchy',
    element: <HierarchicalRoles />,
  },
];

export default PoliciesAndAccess;

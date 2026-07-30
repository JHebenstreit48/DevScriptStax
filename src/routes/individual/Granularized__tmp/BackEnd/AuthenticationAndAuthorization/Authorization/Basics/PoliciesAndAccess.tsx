import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StaticDynamicRules = lazy(() => import('@/pages/mainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/PoliciesAndAccess/StaticDynamicRules'));
const HierarchicalRoles = lazy(() => import('@/pages/mainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Basics/PoliciesAndAccess/HierarchicalRoles'));

const PoliciesAndAccess: RouteObject[] = [
  {
    path: '/authorization/basics/policies/static-dynamic',
    element: <StaticDynamicRules />,
  },
  {
    path: '/authorization/basics/policies/roles-hierarchy',
    element: <HierarchicalRoles />,
  },
];

export default PoliciesAndAccess;

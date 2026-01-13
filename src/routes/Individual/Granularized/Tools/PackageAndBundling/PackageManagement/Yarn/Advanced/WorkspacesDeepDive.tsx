import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProtocolsAndLinking = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/WorkspacesDeepDive/ProtocolsAndLinking'));
const HoistingAndConstraints = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/WorkspacesDeepDive/HoistingAndConstraints'));

const WorkspacesDeepDive: RouteObject[] = [
  {
    path: '/tools/package-management/yarn/advanced/workspaces/protocols-linking',
    element: <ProtocolsAndLinking />,
  },
  {
    path: '/tools/package-management/yarn/advanced/workspaces/hoisting-constraints',
    element: <HoistingAndConstraints />,
  },
];

export default WorkspacesDeepDive;

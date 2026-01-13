import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PnPBasics = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/PlugnPlay/PnPBasics'));
const TroubleshootingPnP = lazy(() => import('@/Pages/MainTabs/Tools/PackageAndBundling/PackageManagement/Yarn/Advanced/PlugnPlay/TroubleshootingPnP'));

const PlugnPlay: RouteObject[] = [
  {
    path: '/tools/package-management/yarn/advanced/pnp/basics',
    element: <PnPBasics />,
  },
  {
    path: '/tools/package-management/yarn/advanced/pnp/troubleshooting',
    element: <TroubleshootingPnP />,
  },
];

export default PlugnPlay;

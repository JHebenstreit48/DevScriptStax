import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PubspecYaml = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Tools/PackageMgmt/PubspecYaml'));
const PubGetUpgrade = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Tools/PackageMgmt/PubGetUpgrade'));

const PackageMgmt: RouteObject[] = [
  {
    path: '/dart/tools/pkg/pubspec',
    element: <PubspecYaml />,
  },
  {
    path: '/dart/tools/pkg/pub-get-upgrade',
    element: <PubGetUpgrade />,
  },
];

export default PackageMgmt;

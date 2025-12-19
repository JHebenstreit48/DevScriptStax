import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PostCSS8AndESM = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Advanced/CompatAndMigration/PostCSS8AndESM'));
const LegacyBuildMigration = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Advanced/CompatAndMigration/LegacyBuildMigration'));

const CompatAndMigration: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/advanced/compat-and-migration/postcss-8-and-esm',
    element: <PostCSS8AndESM />,
  },
  {
    path: '/css/tools/postprocessors/advanced/compat-and-migration/legacy-build-migration',
    element: <LegacyBuildMigration />,
  },
];

export default CompatAndMigration;

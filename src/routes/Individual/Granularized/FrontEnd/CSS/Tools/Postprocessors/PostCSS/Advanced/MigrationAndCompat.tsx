import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PostCSS8AndESM = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/MigrationAndCompat/PostCSS8AndESM'));
const CSSModulesAndTailwind = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/MigrationAndCompat/CSSModulesAndTailwind'));

const MigrationAndCompat: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/postcss/advanced/migration-and-compat/postcss-8-and-esm',
    element: <PostCSS8AndESM />,
  },
  {
    path: '/css/tools/postprocessors/postcss/advanced/migration-and-compat/css-modules-and-tailwind',
    element: <CSSModulesAndTailwind />,
  },
];

export default MigrationAndCompat;

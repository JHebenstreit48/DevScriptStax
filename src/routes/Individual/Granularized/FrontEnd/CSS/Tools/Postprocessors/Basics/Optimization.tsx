import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Minify = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Postprocessors/Basics/Optimization/Minify'));
const PurgeAndTreeShake = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Postprocessors/Basics/Optimization/PurgeAndTreeShake'));

const Optimization: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/basics/optimization/minify-cssnano-csso',
    element: <Minify />,
  },
  {
    path: '/css/tools/postprocessors/basics/optimization/purge-and-tree-shake',
    element: <PurgeAndTreeShake />,
  },
];

export default Optimization;

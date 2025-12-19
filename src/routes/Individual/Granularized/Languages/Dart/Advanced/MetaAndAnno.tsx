import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Annotations = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Advanced/MetaAndAnno/Annotations'));
const SourceGen = lazy(() => import('@/Pages/MainTabs/Languages/Dart/Advanced/MetaAndAnno/SourceGen'));

const MetaAndAnno: RouteObject[] = [
  {
    path: '/dart/advanced/meta-anno/annotations',
    element: <Annotations />,
  },
  {
    path: '/dart/advanced/meta-anno/source-gen',
    element: <SourceGen />,
  },
];

export default MetaAndAnno;

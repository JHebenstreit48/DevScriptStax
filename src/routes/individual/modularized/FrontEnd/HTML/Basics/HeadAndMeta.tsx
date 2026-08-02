import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HeadElements = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/HeadAndMetadata/Head'));
const MetaElements = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/HeadAndMetadata/MetaElements'));

const HeadAndMeta: RouteObject[] = [
  {
    path: '/front-end/html/basics/head-and-metadata/head-elements',
    element: <HeadElements />,
  },
  {
    path: '/front-end/html/basics/head-and-metadata/meta-elements',
    element: <MetaElements />,
  },
];

export default HeadAndMeta;
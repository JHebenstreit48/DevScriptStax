import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HeadElements = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Intermediate/HeadAndMetadata/Head'));
const MetaElements = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Intermediate/HeadAndMetadata/MetaElements'));

const HeadAndMeta: RouteObject[] = [
  {
    path: '/html/intermediate/head-and-meta/head',
    element: <HeadElements />,
  },
  {
    path: '/html/intermediate/head-and-meta/meta',
    element: <MetaElements />,
  },
];

export default HeadAndMeta;
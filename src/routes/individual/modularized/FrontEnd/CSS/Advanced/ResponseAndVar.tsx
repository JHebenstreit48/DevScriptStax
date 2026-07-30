import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MediaQueries = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Advanced/ResponseAndVar/MediaQueries'));
const Variables = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Advanced/ResponseAndVar/Variables'));

const ResponseAndVar: RouteObject[] = [
  {
    path: '/css/advanced/responsive-and-variables/media-queries',
    element: <MediaQueries />,
  },
  {
    path: '/css/advanced/responsive-and-variables/variables',
    element: <Variables />,
  },
];

export default ResponseAndVar;
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MediaQueries = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Advanced/ResponsiveAndVariables/MediaQueries'));
const Variables = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Advanced/ResponsiveAndVariables/Variables'));

const ResponsiveAndVariables: RouteObject[] = [
  {
    path: '/css/advanced/responsive-and-variables/media-queries',
    element: <MediaQueries />,
  },
  {
    path: '/css/advanced/responsive-and-variables/variables',
    element: <Variables />,
  },
];

export default ResponsiveAndVariables;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Flexbox = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Advanced/Layouts/Flexbox'));
const Grid = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Advanced/Layouts/Grid'));

const Layouts: RouteObject[] = [
  {
    path: '/css/advanced/layouts/flexbox',
    element: <Flexbox />,
  },
  {
    path: '/css/advanced/layouts/grid',
    element: <Grid />,
  },
];

export default Layouts;
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Attributes = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/Structure/Attributes'));
const Elements = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/Structure/Elements'));
const TextAndLinks = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/Structure/TextAndLinks'));
const Lists = lazy(() => import('@/pages/mainTabs/FrontEnd/HTML/Basics/Structure/Lists'));

const Structures: RouteObject[] = [
  {
    path: '/front-end/html/basics/structure/elements-and-tags',
    element: <Elements />,
  },
  {
    path: '/front-end/html/basics/structure/attributes',
    element: <Attributes />,
  },
  {
    path: '/front-end/html/basics/structure/text-and-links',
    element: <TextAndLinks />,
  },
  {
    path: '/front-end/html/basics/structure/lists',
    element: <Lists />,
  }
];

export default Structures;
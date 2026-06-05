import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Attributes = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Basics/Structure/Attributes'));
const Elements = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Basics/Structure/Elements'));
const TextAndLinks = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Basics/Structure/TextAndLinks'));
const Lists = lazy(() => import('@/Pages/MainTabs/FrontEnd/HTML/Basics/Structure/Lists'));

const Structures: RouteObject[] = [
  {
    path: '/html/basics/structure/elements-and-tags',
    element: <Elements />,
  },
  {
    path: '/html/basics/structure/attributes',
    element: <Attributes />,
  },
  {
    path: '/html/basics/structure/text-and-links',
    element: <TextAndLinks />,
  },
  {
    path: '/html/basics/structure/lists',
    element: <Lists />,
  }
];

export default Structures;
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Formatting = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Basics/ContentElements/Formatting'));
const Tables = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Basics/ContentElements/Tables'));
const ImagesAndLinks = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Basics/ContentElements/ImagesAndLinks'));

const ContentElements: RouteObject[] = [
  {
    path: '/markdown/basics/content-elements/formatting',
    element: <Formatting />,
  },
  {
    path: '/markdown/basics/content-elements/tables',
    element: <Tables />,
  },
  {
    path: '/markdown/basics/content-elements/images-and-links',
    element: <ImagesAndLinks />,
  },
];

export default ContentElements;

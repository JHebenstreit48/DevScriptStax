import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Typography = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/TypographyAndContent/Typography'));
const ImagesAndFigures = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/TypographyAndContent/ImagesAndFigures'));

const TypographyAndContent: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/typography-and-content/typography',
    element: <Typography />,
  },
  {
    path: '/frameworks/bootstrap/basics/typography-and-content/images-and-figures',
    element: <ImagesAndFigures />,
  },
];

export default TypographyAndContent;

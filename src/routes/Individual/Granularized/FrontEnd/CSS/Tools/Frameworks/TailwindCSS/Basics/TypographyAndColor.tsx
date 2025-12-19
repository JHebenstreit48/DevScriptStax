import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TypographyUtilities = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/TypographyAndColor/TypographyUtilities'));
const ColorsAndOpacity = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/TypographyAndColor/ColorsAndOpacity'));

const TypographyAndColor: RouteObject[] = [
  {
    path: '/css/tools/frameworks/tailwind/basics/typography-and-color/typography-utilities',
    element: <TypographyUtilities />,
  },
  {
    path: '/css/tools/frameworks/tailwind/basics/typography-and-color/colors-and-opacity',
    element: <ColorsAndOpacity />,
  },
];

export default TypographyAndColor;

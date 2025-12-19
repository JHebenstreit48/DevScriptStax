import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SpacingAndSizing = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities/SpacingAndSizing'));
const DisplayAndVisibility = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities/DisplayAndVisibility'));

const Utilities: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/utilities/spacing-and-sizing',
    element: <SpacingAndSizing />,
  },
  {
    path: '/frameworks/bootstrap/basics/utilities/display-and-visibility',
    element: <DisplayAndVisibility />,
  },
];

export default Utilities;

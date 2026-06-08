import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SpacingAndSizing = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities/SpacingAndSizing'));
const ColorsAndDisplay = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities/ColorsAndDisplay'));
const Buttons = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities/Buttons'));

const Utilities: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/utilities/spacing-and-sizing',
    element: <SpacingAndSizing />,
  },
  {
    path: '/frameworks/bootstrap/basics/utilities/colors-and-display',
    element: <ColorsAndDisplay />,
  },
  {
    path: '/frameworks/bootstrap/basics/utilities/buttons',
    element: <Buttons />
  }
];

export default Utilities;
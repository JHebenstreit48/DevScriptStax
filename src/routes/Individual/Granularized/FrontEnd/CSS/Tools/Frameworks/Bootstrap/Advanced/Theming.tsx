import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SassAndVariables = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Theming/SassAndVariables'));
const CustomizeBuild = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Theming/CustomizeBuild'));

const Theming: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/advanced/theming/sass-and-variables',
    element: <SassAndVariables />,
  },
  {
    path: '/frameworks/bootstrap/advanced/theming/customize-build',
    element: <CustomizeBuild />,
  },
];

export default Theming;

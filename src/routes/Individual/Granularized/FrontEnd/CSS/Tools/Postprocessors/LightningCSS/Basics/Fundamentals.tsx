import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Fundamentals/Introduction'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Fundamentals/InstallAndSetup'));

const Fundamentals: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/lightning-css/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/css/tools/postprocessors/lightning-css/basics/fundamentals/install-and-setup',
    element: <InstallAndSetup />,
  },
];

export default Fundamentals;

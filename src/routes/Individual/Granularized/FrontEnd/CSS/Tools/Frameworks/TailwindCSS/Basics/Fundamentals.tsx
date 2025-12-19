import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Fundamentals/Introduction'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Fundamentals/InstallAndSetup'));

const Fundamentals: RouteObject[] = [
  {
    path: '/css/tools/frameworks/tailwind/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/css/tools/frameworks/tailwind/basics/fundamentals/install-and-setup',
    element: <InstallAndSetup />,
  },
];

export default Fundamentals;

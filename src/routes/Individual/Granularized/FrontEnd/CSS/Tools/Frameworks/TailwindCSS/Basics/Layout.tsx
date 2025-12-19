import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ContainerAndBreakpoints = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Layout/ContainerAndBreakpoints'));
const FlexAndGrid = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Layout/FlexAndGrid'));

const Layout: RouteObject[] = [
  {
    path: '/css/tools/frameworks/tailwind/basics/layout/container-and-breakpoints',
    element: <ContainerAndBreakpoints />,
  },
  {
    path: '/css/tools/frameworks/tailwind/basics/layout/flex-and-grid',
    element: <FlexAndGrid />,
  },
];

export default Layout;

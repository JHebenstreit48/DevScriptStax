import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GridSystem = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Layout/GridSystem'));
const ContainersAndBreakpoints = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Layout/ContainersAndBreakpoints'));

const Layout: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/layout/grid-system',
    element: <GridSystem />,
  },
  {
    path: '/frameworks/bootstrap/basics/layout/containers-and-breakpoints',
    element: <ContainersAndBreakpoints />,
  },
];

export default Layout;

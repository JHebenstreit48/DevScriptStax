import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NavbarsAndTabs = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Navigation/NavbarsAndTabs'));
const BreadcrumbsAndPagination = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Navigation/BreadcrumbsAndPagination'));
const NavbarCollapseAndEvents = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Navigation/NavbarCollapseAndEvents'));
const TabsAndPillsJS = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Navigation/TabsAndPillsJS'));

const Navigation: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/navigation/navbars-and-tabs',
    element: <NavbarsAndTabs />,
  },
  {
    path: '/frameworks/bootstrap/basics/navigation/breadcrumbs-and-pagination',
    element: <BreadcrumbsAndPagination />,
  },
  {
    path: '/frameworks/bootstrap/basics/navigation/navbar-collapse-and-events',
    element: <NavbarCollapseAndEvents />,
  },
  {
    path: '/frameworks/bootstrap/basics/navigation/tabs-and-pills-js',
    element: <TabsAndPillsJS />
  }
];

export default Navigation;
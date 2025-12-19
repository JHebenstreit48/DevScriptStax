import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NavbarsAndTabs = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Navigation/NavbarsAndTabs'));
const BreadcrumbsAndPagination = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Navigation/BreadcrumbsAndPagination'));

const Navigation: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/components/navigation/navbars-and-tabs',
    element: <NavbarsAndTabs />,
  },
  {
    path: '/frameworks/bootstrap/basics/components/navigation/breadcrumbs-and-pagination',
    element: <BreadcrumbsAndPagination />,
  },
];

export default Navigation;

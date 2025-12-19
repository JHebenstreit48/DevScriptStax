import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NavbarAndNav = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Navigation/NavbarAndNav'));
const TabsAndBreadcrumbs = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Navigation/TabsAndBreadcrumbs'));

const Navigation: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/basics/components/navigation/navbar-and-nav',
    element: <NavbarAndNav />,
  },
  {
    path: '/frameworks/react-bootstrap/basics/components/navigation/tabs-and-breadcrumbs',
    element: <TabsAndBreadcrumbs />,
  },
];

export default Navigation;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NavbarCollapseAndEvents = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Components/Navigation/NavbarCollapseAndEvents'));
const TabsAndPillsJS = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Components/Navigation/TabsAndPillsJS'));

const Navigation: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/advanced/components/navigation-js/navbar-collapse-and-events',
    element: <NavbarCollapseAndEvents />,
  },
  {
    path: '/frameworks/bootstrap/advanced/components/navigation-js/tabs-and-pills-js',
    element: <TabsAndPillsJS />,
  },
];

export default Navigation;

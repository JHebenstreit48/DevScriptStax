import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ContainerRowCol = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Layout/ContainerRowCol'));
const StackAndGrid = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Layout/StackAndGrid'));

const Layout: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/basics/components/layout/container-row-col',
    element: <ContainerRowCol />,
  },
  {
    path: '/frameworks/react-bootstrap/basics/components/layout/stack-and-grid',
    element: <StackAndGrid />,
  },
];

export default Layout;

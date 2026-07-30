import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Fundamentals/Introduction'));
const InstallAndSetup = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Fundamentals/InstallAndSetup'));

const Fundamentals: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/frameworks/react-bootstrap/basics/fundamentals/install-setup',
    element: <InstallAndSetup />,
  },
];

export default Fundamentals;

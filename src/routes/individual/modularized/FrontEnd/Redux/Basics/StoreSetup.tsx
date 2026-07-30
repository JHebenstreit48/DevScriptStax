import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ConfigureStore = lazy(() => import('@/pages/mainTabs/FrontEnd/Redux/Basics/StoreSetup/ConfigureStore'));
const Slices = lazy(() => import('@/pages/mainTabs/FrontEnd/Redux/Basics/StoreSetup/Slices'));

const StoreSetup: RouteObject[] = [
  {
    path: '/redux/basics/store-setup/configure-store',
    element: <ConfigureStore />,
  },
  {
    path: '/redux/basics/store-setup/slices',
    element: <Slices />,
  },
];

export default StoreSetup;

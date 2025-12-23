import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SSRAndDSG = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Advanced/Rendering/SSRAndDSG'));
const ClientOnlyRoutes = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Advanced/Rendering/ClientOnlyRoutes'));

const Rendering: RouteObject[] = [
  {
    path: '/gatsby/advanced/rendering/ssr-and-dsg',
    element: <SSRAndDSG />,
  },
  {
    path: '/gatsby/advanced/rendering/client-only-routes',
    element: <ClientOnlyRoutes />,
  },
];

export default Rendering;

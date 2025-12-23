import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Images = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Basics/AssetsAndStyling/Images'));
const StaticAssets = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Basics/AssetsAndStyling/StaticAssets'));
const StylingOptions = lazy(() => import('@/Pages/MainTabs/FrontEnd/Gatsby/Basics/AssetsAndStyling/StylingOptions'));

const AssetsAndStyling: RouteObject[] = [
  {
    path: '/gatsby/basics/assets-styling/images',
    element: <Images />,
  },
  {
    path: '/gatsby/basics/assets-styling/static-assets',
    element: <StaticAssets />,
  },
  {
    path: '/gatsby/basics/assets-styling/styling-options',
    element: <StylingOptions />,
  },
];

export default AssetsAndStyling;

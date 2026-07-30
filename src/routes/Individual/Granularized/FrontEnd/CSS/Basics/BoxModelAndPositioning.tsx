import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BoxModel = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Basics/BoxModelAndPosition/BoxModel'));
const Positioning = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Basics/BoxModelAndPosition/Positioning'));

const BoxModelAndPosition: RouteObject[] = [
  {
    path: '/css/basics/box-model-and-position/box-model',
    element: <BoxModel />,
  },
  {
    path: '/css/basics/box-model-and-position/positioning',
    element: <Positioning />,
  },
];

export default BoxModelAndPosition;
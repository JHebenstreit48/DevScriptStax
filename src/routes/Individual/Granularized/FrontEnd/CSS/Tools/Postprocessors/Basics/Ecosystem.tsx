import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PopularTools = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Basics/Ecosystem/PopularTools'));
const CommunityAndResources = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Basics/Ecosystem/CommunityAndResources'));

const Ecosystem: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/basics/ecosystem/popular-tools',
    element: <PopularTools />,
  },
  {
    path: '/css/tools/postprocessors/basics/ecosystem/community-and-resources',
    element: <CommunityAndResources />,
  },
];

export default Ecosystem;

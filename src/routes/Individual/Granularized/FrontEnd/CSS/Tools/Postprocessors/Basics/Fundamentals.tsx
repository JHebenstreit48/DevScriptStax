import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Basics/Fundamentals/Introduction'));
const PostVsPre = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Basics/Fundamentals/PostVsPre'));

const Fundamentals: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/css/tools/postprocessors/basics/fundamentals/post-vs-pre',
    element: <PostVsPre />,
  },
];

export default Fundamentals;

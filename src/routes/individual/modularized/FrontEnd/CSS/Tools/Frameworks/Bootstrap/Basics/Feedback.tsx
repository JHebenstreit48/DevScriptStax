import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AlertsAndBadges = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Feedback/AlertsAndBadges'));
const SpinnersAndProgress = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Feedback/SpinnersAndProgress'));

const Feedback: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/feedback/alerts-and-badges',
    element: <AlertsAndBadges />,
  },
  {
    path: '/frameworks/bootstrap/basics/feedback/spinners-and-progress',
    element: <SpinnersAndProgress />,
  },
];

export default Feedback;

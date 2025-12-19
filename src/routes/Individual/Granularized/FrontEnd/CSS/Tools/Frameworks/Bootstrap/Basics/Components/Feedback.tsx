import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AlertsAndBadges = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Feedback/AlertsAndBadges'));
const SpinnersAndProgress = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Feedback/SpinnersAndProgress'));

const Feedback: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/basics/components/feedback/alerts-and-badges',
    element: <AlertsAndBadges />,
  },
  {
    path: '/frameworks/bootstrap/basics/components/feedback/spinners-and-progress',
    element: <SpinnersAndProgress />,
  },
];

export default Feedback;

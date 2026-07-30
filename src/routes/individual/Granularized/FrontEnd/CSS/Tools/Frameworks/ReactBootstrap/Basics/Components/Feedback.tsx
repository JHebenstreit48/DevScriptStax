import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AlertAndToast = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Feedback/AlertAndToast'));
const SpinnerAndProgressBar = lazy(() => import('@/pages/mainTabs/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Feedback/SpinnerAndProgressBar'));

const Feedback: RouteObject[] = [
  {
    path: '/frameworks/react-bootstrap/basics/components/feedback/alert-and-toast',
    element: <AlertAndToast />,
  },
  {
    path: '/frameworks/react-bootstrap/basics/components/feedback/spinner-and-progressbar',
    element: <SpinnerAndProgressBar />,
  },
];

export default Feedback;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InitAndDataAPI = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/JavaScript/InitAndDataAPI'));
const EventsAndOptions = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/JavaScript/EventsAndOptions'));

const JavaScript: RouteObject[] = [
  {
    path: '/frameworks/bootstrap/advanced/javascript/init-and-data-api',
    element: <InitAndDataAPI />,
  },
  {
    path: '/frameworks/bootstrap/advanced/javascript/events-and-options',
    element: <EventsAndOptions />,
  },
];

export default JavaScript;

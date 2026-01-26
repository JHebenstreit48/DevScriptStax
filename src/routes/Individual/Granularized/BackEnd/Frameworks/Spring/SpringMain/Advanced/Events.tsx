import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ApplicationEvents = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Advanced/Events/ApplicationEvents'));
const Listeners = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Advanced/Events/Listeners'));

const Events: RouteObject[] = [
  {
    path: '/frameworks/spring/spring-main/advanced/events/application-events',
    element: <ApplicationEvents />,
  },
  {
    path: '/frameworks/spring/spring-main/advanced/events/listeners',
    element: <Listeners />,
  },
];

export default Events;

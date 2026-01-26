import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Routing = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/RoutingAndControllers/Routing'));
const Controllers = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/RoutingAndControllers/Controllers'));
const ParamsAndStrongParams = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Basics/RoutingAndControllers/ParamsAndStrongParams'));

const RoutingAndControllers: RouteObject[] = [
  {
    path: '/frameworks/ruby-on-rails/basics/routing-controllers/routing',
    element: <Routing />,
  },
  {
    path: '/frameworks/ruby-on-rails/basics/routing-controllers/controllers',
    element: <Controllers />,
  },
  {
    path: '/frameworks/ruby-on-rails/basics/routing-controllers/params-strong',
    element: <ParamsAndStrongParams />,
  },
];

export default RoutingAndControllers;

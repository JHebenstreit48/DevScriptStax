import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const APIMode = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/API/APIMode'));
const JSONRendering = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/API/JSONRendering'));

const API: RouteObject[] = [
  {
    path: '/frameworks/ruby-on-rails/advanced/api/api-mode',
    element: <APIMode />,
  },
  {
    path: '/frameworks/ruby-on-rails/advanced/api/json-rendering',
    element: <JSONRendering />,
  },
];

export default API;

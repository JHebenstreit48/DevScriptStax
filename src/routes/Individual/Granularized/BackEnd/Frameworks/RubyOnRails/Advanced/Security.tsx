import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Devise = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/Security/Devise'));
const Authorization = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/Security/Authorization'));

const Security: RouteObject[] = [
  {
    path: '/backend/frameworks/ruby-on-rails/advanced/security/devise-auth',
    element: <Devise />,
  },
  {
    path: '/backend/frameworks/ruby-on-rails/advanced/security/authorization',
    element: <Authorization />,
  },
];

export default Security;

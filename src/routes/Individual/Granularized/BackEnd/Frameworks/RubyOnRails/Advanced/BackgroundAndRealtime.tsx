import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ActiveJobAndSidekiq = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/BackgroundAndRealtime/ActiveJobAndSidekiq'));
const ActionCable = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/BackgroundAndRealtime/ActionCable'));

const BackgroundAndRealtime: RouteObject[] = [
  {
    path: '/backend/frameworks/ruby-on-rails/advanced/background-realtime/active-job-sidekiq',
    element: <ActiveJobAndSidekiq />,
  },
  {
    path: '/backend/frameworks/ruby-on-rails/advanced/background-realtime/action-cable',
    element: <ActionCable />,
  },
];

export default BackgroundAndRealtime;

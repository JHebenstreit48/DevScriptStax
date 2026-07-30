import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ActiveJobAndSidekiq = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/BackgroundAndRealtime/ActiveJobAndSidekiq'));
const ActionCable = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/RubyOnRails/Advanced/BackgroundAndRealtime/ActionCable'));

const BackgroundAndRealtime: RouteObject[] = [
  {
    path: '/frameworks/ruby-on-rails/advanced/background-realtime/active-job-sidekiq',
    element: <ActiveJobAndSidekiq />,
  },
  {
    path: '/frameworks/ruby-on-rails/advanced/background-realtime/action-cable',
    element: <ActionCable />,
  },
];

export default BackgroundAndRealtime;

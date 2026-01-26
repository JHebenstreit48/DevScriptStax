import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UsingPlugins = lazy(() => import('@/Pages/MainTabs/Tools/CICD/Jenkins/Advanced/PluginsAndReuse/UsingPlugins'));
const SharedLibraries = lazy(() => import('@/Pages/MainTabs/Tools/CICD/Jenkins/Advanced/PluginsAndReuse/SharedLibraries'));

const PluginsAndReuse: RouteObject[] = [
  {
    path: '/ci-cd/jenkins/advanced/plugins-reuse/plugins',
    element: <UsingPlugins />,
  },
  {
    path: '/ci-cd/jenkins/advanced/plugins-reuse/shared-libraries',
    element: <SharedLibraries />,
  },
];

export default PluginsAndReuse;

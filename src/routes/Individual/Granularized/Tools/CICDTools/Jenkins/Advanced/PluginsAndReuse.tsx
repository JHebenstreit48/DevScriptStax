import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UsingPlugins = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Advanced/PluginsAndReuse/UsingPlugins'));
const SharedLibraries = lazy(() => import('@/Pages/MainTabs/Tools/CICDTools/Jenkins/Advanced/PluginsAndReuse/SharedLibraries'));

const PluginsAndReuse: RouteObject[] = [
  {
    path: '/tools/cicd/jenkins/advanced/plugins-reuse/plugins',
    element: <UsingPlugins />,
  },
  {
    path: '/tools/cicd/jenkins/advanced/plugins-reuse/shared-libraries',
    element: <SharedLibraries />,
  },
];

export default PluginsAndReuse;

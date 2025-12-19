import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AutoprefixAndBrowserslist = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Basics/CoreTasks/AutoprefixAndBrowserslist'));
const FeaturePolyfills = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/Basics/CoreTasks/FeaturePolyfills'));

const CoreTasks: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/basics/core-tasks/autoprefix-and-browserslist',
    element: <AutoprefixAndBrowserslist />,
  },
  {
    path: '/css/tools/postprocessors/basics/core-tasks/feature-polyfills',
    element: <FeaturePolyfills />,
  },
];

export default CoreTasks;

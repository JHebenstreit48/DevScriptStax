import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UsingPlugins = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Basics/PluginsAndEditors/UsingPlugins'));
const VSCodeAndEditors = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Basics/PluginsAndEditors/VSCodeAndEditors'));

const PluginsAndEditors: RouteObject[] = [
  {
    path: '/eslint/basics/plugins-editors/using-plugins',
    element: <UsingPlugins />,
  },
  {
    path: '/eslint/basics/plugins-editors/editors',
    element: <VSCodeAndEditors />,
  },
];

export default PluginsAndEditors;

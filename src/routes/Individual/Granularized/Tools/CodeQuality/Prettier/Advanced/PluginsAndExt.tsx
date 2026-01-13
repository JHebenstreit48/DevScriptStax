import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PrettierPlugins = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Advanced/PluginsAndExt/PrettierPlugins'));
const EmbeddedLanguages = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Advanced/PluginsAndExt/EmbeddedLanguages'));

const PluginsAndExt: RouteObject[] = [
  {
    path: '/prettier/advanced/plugins-ext/prettier-plugins',
    element: <PrettierPlugins />,
  },
  {
    path: '/prettier/advanced/plugins-ext/embedded-languages',
    element: <EmbeddedLanguages />,
  },
];

export default PluginsAndExt;

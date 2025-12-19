import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OfficialPlugins = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Plugins/OfficialPlugins'));
const CustomPlugins = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Plugins/CustomPlugins'));

const Plugins: RouteObject[] = [
  {
    path: '/css/tools/frameworks/tailwind/advanced/plugins/official-plugins',
    element: <OfficialPlugins />,
  },
  {
    path: '/css/tools/frameworks/tailwind/advanced/plugins/custom-plugins',
    element: <CustomPlugins />,
  },
];

export default Plugins;

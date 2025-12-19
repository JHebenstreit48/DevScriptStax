import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TailwindConfig = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/ConfigBasics/TailwindConfig'));
const ContentPathsAndJIT = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/ConfigBasics/ContentPathsAndJIT'));

const ConfigBasics: RouteObject[] = [
  {
    path: '/css/tools/frameworks/tailwind/basics/config-basics/tailwind-config',
    element: <TailwindConfig />,
  },
  {
    path: '/css/tools/frameworks/tailwind/basics/config-basics/content-paths-and-jit',
    element: <ContentPathsAndJIT />,
  },
];

export default ConfigBasics;

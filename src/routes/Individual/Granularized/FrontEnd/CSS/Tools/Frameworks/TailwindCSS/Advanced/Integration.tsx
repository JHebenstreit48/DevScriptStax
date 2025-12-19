import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildTools = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Integration/BuildTools'));
const Frameworks = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Integration/Frameworks'));

const Integration: RouteObject[] = [
  {
    path: '/css/tools/frameworks/tailwind/advanced/integration/build-tools-vite-webpack',
    element: <BuildTools />,
  },
  {
    path: '/css/tools/frameworks/tailwind/advanced/integration/frameworks-react-next',
    element: <Frameworks />,
  },
];

export default Integration;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CLIAndScripts = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Workflow/CLIAndScripts'));
const ViteAndParcel = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics/Workflow/ViteAndParcel'));

const Workflow: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/postcss/basics/workflow/cli-and-scripts',
    element: <CLIAndScripts />,
  },
  {
    path: '/css/tools/postprocessors/postcss/basics/workflow/vite-and-parcel',
    element: <ViteAndParcel />,
  },
];

export default Workflow;

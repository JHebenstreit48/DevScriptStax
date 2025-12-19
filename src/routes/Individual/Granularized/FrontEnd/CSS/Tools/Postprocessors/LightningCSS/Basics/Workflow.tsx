import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CLIAndScripts = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Workflow/CLIAndScripts'));
const SourceMaps = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Workflow/SourceMaps'));

const Workflow: RouteObject[] = [
  {
    path: '/css/tools/postprocessors/lightning-css/basics/workflow/cli-and-scripts',
    element: <CLIAndScripts />,
  },
  {
    path: '/css/tools/postprocessors/lightning-css/basics/workflow/source-maps-basics',
    element: <SourceMaps />,
  },
];

export default Workflow;

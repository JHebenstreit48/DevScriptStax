import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CLIAndScripts = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/WorkflowAndDX/CLIAndScripts'));
const IntelliSenseAndClassOrder = lazy(() => import('@/Pages/MainTabs/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/WorkflowAndDX/IntelliSenseAndClassOrder'));

const WorkflowAndDX: RouteObject[] = [
  {
    path: '/css/tools/frameworks/tailwind/basics/workflow-and-dx/cli-and-scripts',
    element: <CLIAndScripts />,
  },
  {
    path: '/css/tools/frameworks/tailwind/basics/workflow-and-dx/intellisense-and-class-order',
    element: <IntelliSenseAndClassOrder />,
  },
];

export default WorkflowAndDX;

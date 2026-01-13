import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CLIUsage = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Basics/Workflow/CLIUsage'));
const EditorIntegration = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/TSLint/Basics/Workflow/EditorIntegration'));

const Workflow: RouteObject[] = [
  {
    path: '/tslint/basics/workflow/cli-usage',
    element: <CLIUsage />,
  },
  {
    path: '/tslint/basics/workflow/editor-integration',
    element: <EditorIntegration />,
  },
];

export default Workflow;

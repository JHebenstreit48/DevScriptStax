import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VSCodeAndEditors = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Basics/EditorsAndCLI/VSCodeAndEditors'));
const CLIUsage = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/StandardJS/Basics/EditorsAndCLI/CLIUsage'));

const EditorsAndCLI: RouteObject[] = [
  {
    path: '/standardjs/basics/editors-cli/vscode-editors',
    element: <VSCodeAndEditors />,
  },
  {
    path: '/standardjs/basics/editors-cli/cli-usage',
    element: <CLIUsage />,
  },
];

export default EditorsAndCLI;

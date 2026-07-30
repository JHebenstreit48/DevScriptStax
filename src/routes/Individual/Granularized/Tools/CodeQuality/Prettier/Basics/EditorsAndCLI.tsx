import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VSCodeAndEditors = lazy(() => import('@/pages/mainTabs/Tools/CodeQuality/Prettier/Basics/EditorsAndCLI/VSCodeAndEditors'));
const CLIUsage = lazy(() => import('@/pages/mainTabs/Tools/CodeQuality/Prettier/Basics/EditorsAndCLI/CLIUsage'));

const EditorsAndCLI: RouteObject[] = [
  {
    path: '/prettier/basics/editors-cli/vscode-editors',
    element: <VSCodeAndEditors />,
  },
  {
    path: '/prettier/basics/editors-cli/cli-usage',
    element: <CLIUsage />,
  },
];

export default EditorsAndCLI;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VSCode = lazy(() => import('@/pages/mainTabs/Languages/Dart/Tools/IDESupport/VSCode'));
const IntelliJAndroidStudio = lazy(() => import('@/pages/mainTabs/Languages/Dart/Tools/IDESupport/IntelliJAndroidStudio'));

const IDESupport: RouteObject[] = [
  {
    path: '/dart/tools/ide/vscode',
    element: <VSCode />,
  },
  {
    path: '/dart/tools/ide/intellij',
    element: <IntelliJAndroidStudio />,
  },
];

export default IDESupport;

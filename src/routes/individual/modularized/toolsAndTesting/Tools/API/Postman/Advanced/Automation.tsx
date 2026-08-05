import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Scripts = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/API/Postman/Advanced/Automation/Scripts'));
const PreAndTests = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/API/Postman/Advanced/Automation/PreAndTests'));

const Automation: RouteObject[] = [
  {
    path: '/tools/api/postman/advanced/automation/scripts',
    element: <Scripts />,
  },
  {
    path: '/tools/api/postman/advanced/automation/pre-tests',
    element: <PreAndTests />,
  },
];

export default Automation;

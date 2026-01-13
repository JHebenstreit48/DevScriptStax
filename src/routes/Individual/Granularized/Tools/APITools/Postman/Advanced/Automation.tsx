import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Scripts = lazy(() => import('@/Pages/MainTabs/Tools/APITools/Postman/Advanced/Automation/Scripts'));
const PreAndTests = lazy(() => import('@/Pages/MainTabs/Tools/APITools/Postman/Advanced/Automation/PreAndTests'));

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

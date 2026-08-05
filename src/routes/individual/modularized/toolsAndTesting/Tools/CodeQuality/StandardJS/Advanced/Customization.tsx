import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DisableAndInline = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CodeQuality/StandardJS/Advanced/Customization/DisableAndInline'));
const ExtendingWithESLint = lazy(() => import('@/pages/mainTabs/toolsAndTesting/Tools/CodeQuality/StandardJS/Advanced/Customization/ExtendingWithESLint'));

const Customization: RouteObject[] = [
  {
    path: '/standardjs/advanced/customization/disable-inline',
    element: <DisableAndInline />,
  },
  {
    path: '/standardjs/advanced/customization/extending-with-eslint',
    element: <ExtendingWithESLint />,
  },
];

export default Customization;

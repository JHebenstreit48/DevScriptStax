import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Plugins = lazy(() => import('@/pages/mainTabs/Tools/API/Insomnia/Advanced/Extensibility/Plugins'));
const TemplateTags = lazy(() => import('@/pages/mainTabs/Tools/API/Insomnia/Advanced/Extensibility/TemplateTags'));

const Extensibility: RouteObject[] = [
  {
    path: '/tools/api/insomnia/advanced/extensibility/plugins',
    element: <Plugins />,
  },
  {
    path: '/tools/api/insomnia/advanced/extensibility/template-tags',
    element: <TemplateTags />,
  },
];

export default Extensibility;

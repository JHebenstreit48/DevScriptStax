import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Plugins = lazy(() => import('@/Pages/MainTabs/Tools/APITools/Insomnia/Advanced/Extensibility/Plugins'));
const TemplateTags = lazy(() => import('@/Pages/MainTabs/Tools/APITools/Insomnia/Advanced/Extensibility/TemplateTags'));

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

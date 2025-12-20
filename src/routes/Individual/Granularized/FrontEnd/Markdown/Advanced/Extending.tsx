import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CustomRendering = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Advanced/Extending/CustomRendering'));
const Frontmatter = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Advanced/Extending/Frontmatter'));
const Plugins = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Advanced/Extending/Plugins'));

const Extending: RouteObject[] = [
  {
    path: '/markdown/advanced/extending/custom-rendering',
    element: <CustomRendering />,
  },
  {
    path: '/markdown/advanced/extending/frontmatter',
    element: <Frontmatter />,
  },
  {
    path: '/markdown/advanced/extending/plugins',
    element: <Plugins />,
  },
];

export default Extending;

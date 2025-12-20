import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Extensions = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Intermediate/ExtendedSyntax/Extensions'));
const CodeBlocksAndHighlighting = lazy(() => import('@/Pages/MainTabs/FrontEnd/Markdown/Intermediate/ExtendedSyntax/CodeBlocksAndHighlighting'));

const ExtendedSyntax: RouteObject[] = [
  {
    path: '/markdown/intermediate/extended-syntax/extensions',
    element: <Extensions />,
  },
  {
    path: '/markdown/intermediate/extended-syntax/code-blocks',
    element: <CodeBlocksAndHighlighting />,
  },
];

export default ExtendedSyntax;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GenericsAndProtocols = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Typing/GenericsAndProtocols'));
const TypeNarrowingAndTypedDict = lazy(() => import('@/Pages/MainTabs/Languages/Python/Advanced/Typing/TypeNarrowingAndTypedDict'));

const Typing: RouteObject[] = [
  {
    path: '/python/advanced/typing/generics-protocols',
    element: <GenericsAndProtocols />,
  },
  {
    path: '/python/advanced/typing/narrowing-typeddict',
    element: <TypeNarrowingAndTypedDict />,
  },
];

export default Typing;

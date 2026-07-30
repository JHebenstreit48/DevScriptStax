import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/TypeScript/Basics/Fundamentals/Introduction'
    )
);
const Setup = lazy(
  () =>
    import('@/pages/mainTabs/Languages/TypeScript/Basics/Fundamentals/Setup')
);
const TSConfig = lazy(
  () =>
    import('@/pages/mainTabs/Languages/TypeScript/Basics/Fundamentals/TSConfig'
    )
);

const Fundamentals: RouteObject[] = [
  {
    path: '/typescript/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/typescript/basics/fundamentals/setup',
    element: <Setup />,
  },
  {
    path: '/typescript/basics/fundamentals/tsconfig',
    element: <TSConfig />,
  },
];

export default Fundamentals;
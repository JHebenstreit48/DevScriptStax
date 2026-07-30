import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BasicsAndSyntax = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/Python/Basics/Fundamentals/BasicsAndSyntax'
    )
);
const ControlFlow = lazy(
  () =>
    import(
      '@/pages/mainTabs/Languages/Python/Basics/Fundamentals/ControlFlow'
    )
);

const Fundamentals: RouteObject[] = [
  {
    path: '/python/basics/fundamentals/basics-and-syntax',
    element: <BasicsAndSyntax />,
  },
  {
    path: '/python/basics/fundamentals/control-flow',
    element: <ControlFlow />,
  },
];

export default Fundamentals;
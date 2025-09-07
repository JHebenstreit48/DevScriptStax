import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntroductionAndSyntax = lazy(
  () =>
    import(
      '@/Pages/MainTabs/FrontEndPages/CSSPages/Basics/IntroductionAndSelectors/IntroductionAndSyntax'
    )
);
const Selectors = lazy(
  () => import('@/Pages/MainTabs/FrontEndPages/CSSPages/Basics/IntroductionAndSelectors/Selectors')
);

const IntroductionAndSelectors: RouteObject[] = [
  {
    path: '/css/basics/introduction-and-selectors/introduction-and-syntax',
    element: <IntroductionAndSyntax />,
  },
  {
    path: '/css/basics/introduction-and-selectors/selectors',
    element: <Selectors />,
  },
];

export default IntroductionAndSelectors;
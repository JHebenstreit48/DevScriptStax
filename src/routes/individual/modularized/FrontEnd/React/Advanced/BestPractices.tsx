import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CodeOrganization = lazy(() => import('@/pages/mainTabs/FrontEnd/React/Advanced/BestPractices/CodeOrganization'));
const StrictModeLinting = lazy(() => import('@/pages/mainTabs/FrontEnd/React/Advanced/BestPractices/StrictModeLinting'));
const CommonPitfalls = lazy(() => import('@/pages/mainTabs/FrontEnd/React/Advanced/BestPractices/CommonPitfalls'));

const BestPractices: RouteObject[] = [
  {
    path: '/react/advanced/bestpractices/codeorganization',
    element: <CodeOrganization />,
  },
  {
    path: '/react/advanced/bestpractices/strictmode',
    element: <StrictModeLinting />,
  },
  {
    path: '/react/advanced/bestpractices/pitfalls',
    element: <CommonPitfalls />,
  },
];

export default BestPractices;

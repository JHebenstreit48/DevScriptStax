import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CICDPipelines = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Advanced/CIAndAutomation/CICDPipelines'));
const Monorepos = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Advanced/CIAndAutomation/Monorepos'));

const CIAndAutomation: RouteObject[] = [
  {
    path: '/eslint/advanced/ci-automation/ci-cd-pipelines',
    element: <CICDPipelines />,
  },
  {
    path: '/eslint/advanced/ci-automation/monorepos',
    element: <Monorepos />,
  },
];

export default CIAndAutomation;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WarningsAndErrors = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Advanced/QualityAndSecurity/WarningsAndErrors'));
const SecurityPractices = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/ESLint/Advanced/QualityAndSecurity/SecurityPractices'));

const QualityAndSecurity: RouteObject[] = [
  {
    path: '/eslint/advanced/quality-security/warnings-errors',
    element: <WarningsAndErrors />,
  },
  {
    path: '/eslint/advanced/quality-security/security-practices',
    element: <SecurityPractices />,
  },
];

export default QualityAndSecurity;

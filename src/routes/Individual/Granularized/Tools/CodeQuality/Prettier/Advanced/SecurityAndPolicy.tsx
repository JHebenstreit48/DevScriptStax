import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SecurityConsiderations = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Advanced/SecurityAndPolicy/SecurityConsiderations'));
const OrgStandards = lazy(() => import('@/Pages/MainTabs/Tools/CodeQuality/Prettier/Advanced/SecurityAndPolicy/OrgStandards'));

const SecurityAndPolicy: RouteObject[] = [
  {
    path: '/prettier/advanced/security-policy/security-considerations',
    element: <SecurityConsiderations />,
  },
  {
    path: '/prettier/advanced/security-policy/org-standards',
    element: <OrgStandards />,
  },
];

export default SecurityAndPolicy;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VPCAccess = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/NetworkingAndSecurity/VPCAccess'));
const IAMRolesAndPolicies = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/NetworkingAndSecurity/IAMRolesAndPolicies'));

const NetworkingAndSecurity: RouteObject[] = [
  {
    path: '/aws-lambda/advanced/networking-security/vpc-access',
    element: <VPCAccess />,
  },
  {
    path: '/aws-lambda/advanced/networking-security/iam-roles-policies',
    element: <IAMRolesAndPolicies />,
  },
];

export default NetworkingAndSecurity;

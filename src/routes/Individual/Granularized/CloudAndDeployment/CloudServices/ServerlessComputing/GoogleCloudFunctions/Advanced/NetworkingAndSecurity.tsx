import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VPCConnector = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/NetworkingAndSecurity/VPCConnector'));
const IAMAndServiceAccounts = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced/NetworkingAndSecurity/IAMAndServiceAccounts'));

const NetworkingAndSecurity: RouteObject[] = [
  {
    path: '/google-cloud-functions/advanced/networking-security/vpc-connector',
    element: <VPCConnector />,
  },
  {
    path: '/google-cloud-functions/advanced/networking-security/iam-service-accounts',
    element: <IAMAndServiceAccounts />,
  },
];

export default NetworkingAndSecurity;

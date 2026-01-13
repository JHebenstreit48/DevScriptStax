import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AccountsAndRegions = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/MultiEnv/AccountsAndRegions'));
const ParametersAndContext = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/MultiEnv/ParametersAndContext'));

const MultiEnv: RouteObject[] = [
  {
    path: '/aws-cdk/advanced/multi-env/accounts-regions',
    element: <AccountsAndRegions />,
  },
  {
    path: '/aws-cdk/advanced/multi-env/parameters-context',
    element: <ParametersAndContext />,
  },
];

export default MultiEnv;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PropsAndPatterns = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Authoring/PropsAndPatterns'));
const EnvsAndContext = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics/Authoring/EnvsAndContext'));

const Authoring: RouteObject[] = [
  {
    path: '/aws-cdk/basics/authoring/props-patterns',
    element: <PropsAndPatterns />,
  },
  {
    path: '/aws-cdk/basics/authoring/envs-context',
    element: <EnvsAndContext />,
  },
];

export default Authoring;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Microservices = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Advanced/SystemsAndDesign/Microservices'));
const SSOFederation = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Advanced/SystemsAndDesign/SSOFederation'));
const CustomProviders = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Advanced/SystemsAndDesign/CustomProviders'));
const ScalingSystems = lazy(() => import('@/Pages/MainTabs/BackEnd/AuthenticateAndAuthorize/Authorization/Advanced/SystemsAndDesign/ScalingSystems'));

const SystemsAndDesign: RouteObject[] = [
  {
    path: '/authz/advanced/design/microservices',
    element: <Microservices />,
  },
  {
    path: '/authz/advanced/design/sso',
    element: <SSOFederation />,
  },
  {
    path: '/authz/advanced/design/custom',
    element: <CustomProviders />,
  },
  {
    path: '/authz/advanced/design/scaling',
    element: <ScalingSystems />,
  },
];

export default SystemsAndDesign;

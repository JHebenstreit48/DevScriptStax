import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Fundamentals = lazy(() => import('@/pages/mainTabs/BackEnd/APIs/Advanced/Gateways/Fundamentals'));
const BenefitsOfAPIGateways = lazy(() => import('@/pages/mainTabs/BackEnd/APIs/Advanced/Gateways/BenefitsOfAPIGateways'));
const APIGatewaySecurityFeatures = lazy(() => import('@/pages/mainTabs/BackEnd/APIs/Advanced/Gateways/APIGatewaySecurityFeatures'));

const Gateways: RouteObject[] = [
  {
    path: '/apis/advanced/gateways/fundamentals',
    element: <Fundamentals />,
  },
  {
    path: '/apis/advanced/gateways/benefits',
    element: <BenefitsOfAPIGateways />,
  },
  {
    path: '/apis/advanced/gateways/security',
    element: <APIGatewaySecurityFeatures />,
  },
];

export default Gateways;

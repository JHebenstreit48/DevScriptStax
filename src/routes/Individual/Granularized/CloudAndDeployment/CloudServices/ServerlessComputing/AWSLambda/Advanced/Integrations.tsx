import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const APIGateway = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Integrations/APIGateway'));
const EventBridgeSQSSNS = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/Integrations/EventBridgeSQSSNS'));

const Integrations: RouteObject[] = [
  {
    path: '/aws-lambda/advanced/integrations/api-gateway',
    element: <APIGateway />,
  },
  {
    path: '/aws-lambda/advanced/integrations/eventbridge-sqs-sns',
    element: <EventBridgeSQSSNS />,
  },
];

export default Integrations;

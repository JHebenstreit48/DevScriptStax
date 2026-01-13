import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CostOptimization = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/CostAndScaling/CostOptimization'));
const ScalingControls = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced/CostAndScaling/ScalingControls'));

const CostAndScaling: RouteObject[] = [
  {
    path: '/aws-lambda/advanced/cost-scaling/cost-optimization',
    element: <CostOptimization />,
  },
  {
    path: '/aws-lambda/advanced/cost-scaling/scaling-controls',
    element: <ScalingControls />,
  },
];

export default CostAndScaling;

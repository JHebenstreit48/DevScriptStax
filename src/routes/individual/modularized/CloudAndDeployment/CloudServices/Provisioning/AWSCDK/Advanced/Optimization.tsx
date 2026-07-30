import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ConstructLibraries = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Optimization/ConstructLibraries'));
const ReusablePatterns = lazy(() => import('@/pages/mainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced/Optimization/ReusablePatterns'));

const Optimization: RouteObject[] = [
  {
    path: '/aws-cdk/advanced/optimization/construct-libraries',
    element: <ConstructLibraries />,
  },
  {
    path: '/aws-cdk/advanced/optimization/reusable-patterns',
    element: <ReusablePatterns />,
  },
];

export default Optimization;

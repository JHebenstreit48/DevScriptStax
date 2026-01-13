import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FunctionsAndEvents = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/Authoring/FunctionsAndEvents'));
const PoliciesAndRoles = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics/Authoring/PoliciesAndRoles'));

const Authoring: RouteObject[] = [
  {
    path: '/aws-sam/basics/authoring/functions-events',
    element: <FunctionsAndEvents />,
  },
  {
    path: '/aws-sam/basics/authoring/policies-roles',
    element: <PoliciesAndRoles />,
  },
];

export default Authoring;

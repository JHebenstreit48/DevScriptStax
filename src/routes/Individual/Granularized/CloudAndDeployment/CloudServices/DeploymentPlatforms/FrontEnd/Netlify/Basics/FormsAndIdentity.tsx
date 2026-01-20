import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FormsBasics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/FormsAndIdentity/FormsBasics'));
const IdentityBasics = lazy(() => import('@/Pages/MainTabs/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics/FormsAndIdentity/IdentityBasics'));

const FormsAndIdentity: RouteObject[] = [
  {
    path: '/netlify/basics/forms-identity/forms-basics',
    element: <FormsBasics />,
  },
  {
    path: '/netlify/basics/forms-identity/identity-basics',
    element: <IdentityBasics />,
  },
];

export default FormsAndIdentity;

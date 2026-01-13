import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ApplicationContext = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Advanced/ContextAndProfiles/ApplicationContext'));
const ProfilesAndProperties = lazy(() => import('@/Pages/MainTabs/BackEnd/Frameworks/Spring/SpringMain/Advanced/ContextAndProfiles/ProfilesAndProperties'));

const ContextAndProfiles: RouteObject[] = [
  {
    path: '/backend/frameworks/spring/spring-main/advanced/context-profiles/application-context',
    element: <ApplicationContext />,
  },
  {
    path: '/backend/frameworks/spring/spring-main/advanced/context-profiles/profiles-properties',
    element: <ProfilesAndProperties />,
  },
];

export default ContextAndProfiles;

import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ApplicationContext = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/Spring/SpringMain/Advanced/ContextAndProfiles/ApplicationContext'));
const ProfilesAndProperties = lazy(() => import('@/pages/mainTabs/BackEnd/Frameworks/Spring/SpringMain/Advanced/ContextAndProfiles/ProfilesAndProperties'));

const ContextAndProfiles: RouteObject[] = [
  {
    path: '/frameworks/spring/spring-main/advanced/context-profiles/application-context',
    element: <ApplicationContext />,
  },
  {
    path: '/frameworks/spring/spring-main/advanced/context-profiles/profiles-properties',
    element: <ProfilesAndProperties />,
  },
];

export default ContextAndProfiles;

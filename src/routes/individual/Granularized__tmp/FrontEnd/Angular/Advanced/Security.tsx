import { RouteObject } from 'react-router-dom';

import AuthenticationAuthorization from '@/routes/Individual/Granularized/FrontEnd/Angular/Advanced/Security/AuthenticationAuthorization';
import Fundamentals from '@/routes/Individual/Granularized/FrontEnd/Angular/Advanced/Security/Fundamentals';

const Security: RouteObject[] = [
  ...Fundamentals,
  ...AuthenticationAuthorization,
];

export default Security;
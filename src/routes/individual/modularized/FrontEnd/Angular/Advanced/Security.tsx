import { RouteObject } from 'react-router-dom';

import AuthenticationAuthorization from '@/routes/individual/modularized/FrontEnd/Angular/Advanced/Security/AuthenticationAuthorization';
import Fundamentals from '@/routes/individual/modularized/FrontEnd/Angular/Advanced/Security/Fundamentals';

const Security: RouteObject[] = [
  ...Fundamentals,
  ...AuthenticationAuthorization,
];

export default Security;
import { RouteObject } from "react-router-dom";

import APIs from '@/routes/individual/topics/BackEnd/APIs';
import AuthenticationAndAuthorization from '@/routes/individual/topics/BackEnd/AuthenticationAndAuthorization';
import Databases from '@/routes/individual/topics/BackEnd/Databases';
import Frameworks from '@/routes/individual/topics/BackEnd/Frameworks';
// import WebServers from '@/routes/individual/topics/BackEnd/webServers';

const backEnd: RouteObject[] = [
  ...APIs,
  ...AuthenticationAndAuthorization,
  ...Databases,
  ...Frameworks,
  // ...WebServers,
];

export default backEnd;
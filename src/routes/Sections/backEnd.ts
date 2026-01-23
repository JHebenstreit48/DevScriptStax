import { RouteObject } from "react-router-dom";

import APIs from "@/routes/Individual/FullRoutes/BackEnd/APIs";
// import AuthenticationAndAuthorization from "@/routes/Individual/FullRoutes/BackEnd/AA";
import Databases from "@/routes/Individual/FullRoutes/BackEnd/Databases";
import Frameworks from "@/routes/Individual/FullRoutes/BackEnd/Frameworks";
// import WebServers from "@/routes/Individual/FullRoutes/BackEnd/webServers";

const backEnd: RouteObject[] = [
  ...APIs,
  // ...AuthenticationAndAuthorization,
  ...Databases,
  ...Frameworks,
  // ...WebServers,
];

export default backEnd;
import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Languages/JavaScript/Advanced/Security/Fundamentals";
import ClientSideProtection from "@/routes/Individual/Granularized/Languages/JavaScript/Advanced/Security/ClientSideProtection";

const Security: RouteObject[] = [
  ...Fundamentals,
  ...ClientSideProtection,
];

export default Security;

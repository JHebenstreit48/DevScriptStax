import { RouteObject } from "react-router-dom";

import Automation from "@/routes/Individual/Granularized/Tools/API/Postman/Advanced/Automation";
import Mocking from "@/routes/Individual/Granularized/Tools/API/Postman/Advanced/Mocking";
import Portability from "@/routes/Individual/Granularized/Tools/API/Postman/Advanced/Portability";
import Protocols from "@/routes/Individual/Granularized/Tools/API/Postman/Advanced/Protocols";
import Security from "@/routes/Individual/Granularized/Tools/API/Postman/Advanced/Security";

const Advanced: RouteObject[] = [
  ...Automation,
  ...Mocking,
  ...Portability,
  ...Protocols,
  ...Security,
];

export default Advanced;

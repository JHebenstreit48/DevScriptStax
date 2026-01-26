import { RouteObject } from "react-router-dom";

import API from "@/routes/Individual/FullRoutes/Tools/api";
import CICD from "@/routes/Individual/FullRoutes/Tools/cicd";
// import CodeQuality from "@/routes/Individual/FullRoutes/Tools/codeQuality";
// import PackageAndBundling from "@/routes/Individual/FullRoutes/Tools/packageAndBundling";
import Containerization from "@/routes/Individual/FullRoutes/Tools/containerization";

const tools: RouteObject[] = [
  ...API,
  ...CICD,
  // ...CodeQuality,
  // ...PackageAndBundling,
  ...Containerization,
];

export default tools;
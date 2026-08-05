import { RouteObject } from "react-router-dom";

import API from '@/routes/individual/topics/toolsAndTesting/Tools/api';
import CICD from '@/routes/individual/topics/toolsAndTesting/Tools/cicd';
// import CodeQuality from '@/routes/individual/topics/Tools/codeQuality';
// import PackageAndBundling from '@/routes/individual/topics/Tools/packageAndBundling';
import Containerization from '@/routes/individual/topics/toolsAndTesting/Tools/containerization';

const tools: RouteObject[] = [
  ...API,
  ...CICD,
  // ...CodeQuality,
  // ...PackageAndBundling,
  ...Containerization,
];

export default tools;
import { RouteObject } from "react-router-dom";

import CircleCI from '@/routes/individual/topics/toolsAndTesting/Tools/CICD/CircleCI';
import Jenkins from '@/routes/individual/topics/toolsAndTesting/Tools/CICD/Jenkins';

const CICD: RouteObject[] = [
  ...CircleCI,
  ...Jenkins,
];
export default CICD;
import { RouteObject } from "react-router-dom";

import CircleCI from '@/routes/individual/topics/Tools/CICD/CircleCI';
import Jenkins from '@/routes/individual/topics/Tools/CICD/Jenkins';

const CICD: RouteObject[] = [
  ...CircleCI,
  ...Jenkins,
];
export default CICD;
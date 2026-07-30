import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Basics';
import Advanced from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs/Advanced';

const NodeJs: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default NodeJs;

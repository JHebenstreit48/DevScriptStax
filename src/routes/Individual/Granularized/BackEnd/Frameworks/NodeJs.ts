import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Basics";
import Advanced from "@/routes/Individual/Granularized/BackEnd/Frameworks/NodeJs/Advanced";

const NodeJs: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default NodeJs;

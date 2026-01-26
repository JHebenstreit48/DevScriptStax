import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/BackEnd/Frameworks/Django/Basics";
import Advanced from "@/routes/Individual/Granularized/BackEnd/Frameworks/Django/Advanced";

const Django: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default Django;

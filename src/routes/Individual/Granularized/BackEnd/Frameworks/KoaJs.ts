import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Basics";
import Advanced from "@/routes/Individual/Granularized/BackEnd/Frameworks/KoaJs/Advanced";

const KoaJs: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default KoaJs;

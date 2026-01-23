import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced";

const TailwindCSS: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default TailwindCSS;

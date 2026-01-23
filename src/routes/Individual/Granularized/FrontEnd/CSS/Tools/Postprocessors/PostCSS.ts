import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Basics";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced";

const PostCSS: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default PostCSS;

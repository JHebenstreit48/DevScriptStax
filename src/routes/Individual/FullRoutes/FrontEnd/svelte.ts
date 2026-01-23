import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/Svelte/Basics";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/Svelte/Advanced";

const Svelte: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Svelte;

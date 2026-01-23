import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/Svelte/Basics/Fundamentals";
import CoreConcepts from "@/routes/Individual/Granularized/FrontEnd/Svelte/Basics/CoreConcepts";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
];

export default Basics;
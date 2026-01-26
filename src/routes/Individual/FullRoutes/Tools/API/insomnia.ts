import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/Tools/API/Insomnia/Basics";
import Advanced from "@/routes/Individual/Granularized/Tools/API/Insomnia/Advanced";

const Insomnia: RouteObject[] = [
    ...Basics,
    ...Advanced
  ];

export default Insomnia;
import { RouteObject } from "react-router-dom";

import Basics from "@/routes/Individual/Granularized/FrontEnd/Markdown/Basics";
import Intermediate from "@/routes/Individual/Granularized/FrontEnd/Markdown/Intermediate";
import Advanced from "@/routes/Individual/Granularized/FrontEnd/Markdown/Advanced";

const Markdown: RouteObject[] = [
    ...Basics,
    ...Intermediate,
    ...Advanced,
];

export default Markdown;
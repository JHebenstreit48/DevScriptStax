import { RouteObject } from "react-router-dom";
import Basics from "@/routes/IndividualRoutes/Granularized/FrontEnd/JavaScript/Basics";
import Intermediate from "@/routes/IndividualRoutes/Granularized/FrontEnd/JavaScript/Intermediate";
import Advanced from "@/routes/IndividualRoutes/Granularized/FrontEnd/JavaScript/Advanced";
// import BestPractices from "@/routes/IndividualRoutes/Granularized/FrontEndRoutes

const JavaScript: RouteObject[] = [
...Basics,
...Intermediate,
...Advanced,
// ...BestPractices
];

export default JavaScript;
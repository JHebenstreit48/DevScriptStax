import { RouteObject } from "react-router-dom";
import Basics from "@/routes/IndividualRoutes/Granularized/Languages/JavaScript/Basics";
import Intermediate from "@/routes/IndividualRoutes/Granularized/Languages/JavaScript/Intermediate";
import Advanced from "@/routes/IndividualRoutes/Granularized/Languages/JavaScript/Advanced";
// import Testing from '@/routes/IndividualRoutes/Granularized/Languages/JavaScript/Testing';

const JavaScript: RouteObject[] = [
...Basics,
...Intermediate,
...Advanced,
// ...Testing
];

export default JavaScript;
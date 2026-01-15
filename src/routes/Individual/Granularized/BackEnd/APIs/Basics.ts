import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/BackEnd/APIs/Basics/Fundamentals";
import Documentation from "@/routes/Individual/Granularized/BackEnd/APIs/Basics/Documentation";
import TypesOfAPIs from "@/routes/Individual/Granularized/BackEnd/APIs/Basics/TypesOfAPIs";

const Basics: RouteObject[] = [
...Fundamentals,
...Documentation,
...TypesOfAPIs,
];

export default Basics;
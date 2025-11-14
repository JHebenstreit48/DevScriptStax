import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/BackEnd/APIs/Basics/Fundamentals";
import TypesOfAPIs from "@/routes/Individual/Granularized/BackEnd/APIs/Basics/TypesOfAPIs";

const Basics: RouteObject[] = [
...Fundamentals,
...TypesOfAPIs,
];

export default Basics;
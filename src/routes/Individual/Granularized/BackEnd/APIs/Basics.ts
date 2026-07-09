import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/BackEnd/APIs/Basics/Fundamentals';
import Documentation from '@/routes/Individual/Granularized/BackEnd/APIs/Basics/Documentation';
import TypesOfAPIs from '@/routes/Individual/Granularized/BackEnd/APIs/Basics/TypesOfAPIs';
import HTTPClients from '@/routes/Individual/Granularized/BackEnd/APIs/Basics/HTTPClients';

const Basics: RouteObject[] = [
...Fundamentals,
...Documentation,
...TypesOfAPIs,
...HTTPClients
];

export default Basics;
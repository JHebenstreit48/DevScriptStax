import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/BackEnd/APIs/Basics/Fundamentals';
import Documentation from '@/routes/individual/modularized/BackEnd/APIs/Basics/Documentation';
import TypesOfAPIs from '@/routes/individual/modularized/BackEnd/APIs/Basics/TypesOfAPIs';
import HTTPClients from '@/routes/individual/modularized/BackEnd/APIs/Basics/HTTPClients';

const Basics: RouteObject[] = [
...Fundamentals,
...Documentation,
...TypesOfAPIs,
...HTTPClients
];

export default Basics;
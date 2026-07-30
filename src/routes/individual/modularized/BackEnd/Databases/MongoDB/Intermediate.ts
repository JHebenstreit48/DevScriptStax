import { RouteObject } from "react-router-dom";

import Indexes from '@/routes/individual/modularized/BackEnd/Databases/MongoDB/Intermediate/Indexes';
import Aggregation from '@/routes/individual/modularized/BackEnd/Databases/MongoDB/Intermediate/Aggregation';

const Intermediate: RouteObject[] = [
    ...Indexes,
    ...Aggregation,
];

export default Intermediate;
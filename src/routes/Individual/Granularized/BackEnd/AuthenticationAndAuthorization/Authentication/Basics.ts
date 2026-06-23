import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Fundamentals';
import Methods from '@/routes/Individual/Granularized/BackEnd/AuthenticationAndAuthorization/Authentication/Basics/Methods';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Methods,
];

export default Basics;
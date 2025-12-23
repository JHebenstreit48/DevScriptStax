import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/Individual/Granularized/FrontEnd/NextJs/Basics/Fundamentals';
import CoreConcepts from '@/routes/Individual/Granularized/FrontEnd/NextJs/Basics/CoreConcepts';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts
];

export default Basics;
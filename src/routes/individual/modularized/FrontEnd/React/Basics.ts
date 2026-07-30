import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/React/Basics/Fundamentals';
import CoreConcepts from '@/routes/individual/modularized/FrontEnd/React/Basics/CoreConcepts';
import SetupAndStructure from '@/routes/individual/modularized/FrontEnd/React/Basics/SetupAndStructure';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...CoreConcepts,
    ...SetupAndStructure
];

export default Basics;
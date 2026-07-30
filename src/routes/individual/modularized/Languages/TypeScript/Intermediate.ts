import { RouteObject } from "react-router-dom";

import FunctionsAndInterfaces from '@/routes/individual/modularized/Languages/TypeScript/Intermediate/FunctionsAndInterfaces';
import ClassesAndInheritance from '@/routes/individual/modularized/Languages/TypeScript/Intermediate/ClassesAndInheritance';

const Intermediate: RouteObject[] = [
    ...FunctionsAndInterfaces,
    ...ClassesAndInheritance,
];

export default Intermediate;
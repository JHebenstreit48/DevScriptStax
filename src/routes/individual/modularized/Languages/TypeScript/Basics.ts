import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Languages/TypeScript/Basics/Fundamentals';
import Types from '@/routes/individual/modularized/Languages/TypeScript/Basics/Types';

const Basics: RouteObject[] = [
    ...Fundamentals,
    ...Types,
];

export default Basics;
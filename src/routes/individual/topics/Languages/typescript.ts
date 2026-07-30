import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/Languages/TypeScript/Basics';
import Intermediate from '@/routes/individual/modularized/Languages/TypeScript/Intermediate';
import Advanced from '@/routes/individual/modularized/Languages/TypeScript/Advanced';

const TypeScript: RouteObject[] = [
    ...Basics,
    ...Intermediate,
    ...Advanced
];

export default TypeScript;
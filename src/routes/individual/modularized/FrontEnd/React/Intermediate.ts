import { RouteObject } from "react-router-dom";

import ContextAndHooks from '@/routes/individual/modularized/FrontEnd/React/Intermediate/ContextAndHooks';
import Routing from '@/routes/individual/modularized/FrontEnd/React/Intermediate/Routing';
import SetupAndEnhancements from '@/routes/individual/modularized/FrontEnd/React/Intermediate/SetupAndEnhancements';
import Refs from '@/routes/individual/modularized/FrontEnd/React/Intermediate/Refs';

const Intermediate: RouteObject[] = [
    ...ContextAndHooks,
    ...Routing,
    ...SetupAndEnhancements,
    ...Refs
];

export default Intermediate;
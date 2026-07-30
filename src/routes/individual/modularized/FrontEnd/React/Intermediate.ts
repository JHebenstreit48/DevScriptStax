import { RouteObject } from "react-router-dom";

import ContextAndHooks from '@/routes/Individual/Granularized/FrontEnd/React/Intermediate/ContextAndHooks';
import Routing from '@/routes/Individual/Granularized/FrontEnd/React/Intermediate/Routing';
import SetupAndEnhancements from '@/routes/Individual/Granularized/FrontEnd/React/Intermediate/SetupAndEnhancements';
import Refs from '@/routes/Individual/Granularized/FrontEnd/React/Intermediate/Refs';

const Intermediate: RouteObject[] = [
    ...ContextAndHooks,
    ...Routing,
    ...SetupAndEnhancements,
    ...Refs
];

export default Intermediate;
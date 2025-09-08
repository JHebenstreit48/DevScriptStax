import { RouteObject } from "react-router-dom";

import Layouts from '@/routes/IndividualRoutes/Granularized/FrontEndRoutes/CSSRoutes/Advanced/Layouts';
import Effects from '@/routes/IndividualRoutes/Granularized/FrontEndRoutes/CSSRoutes/Advanced/Effects';
import ResponseAndVar from '@/routes/IndividualRoutes/Granularized/FrontEndRoutes/CSSRoutes/Advanced/ResponseAndVar';

const Advanced: RouteObject[] = [
    ...Layouts,
    ...Effects,
    ...ResponseAndVar
];

export default Advanced;
import { RouteObject } from "react-router-dom";

import WebFrameworks from '@/routes/individual/modularized/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks';
import Security from '@/routes/individual/modularized/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security';

const Advanced: RouteObject[] = [
    ...WebFrameworks,
    ...Security,
];

export default Advanced;
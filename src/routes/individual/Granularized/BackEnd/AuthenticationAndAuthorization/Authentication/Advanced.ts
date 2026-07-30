import { RouteObject } from "react-router-dom";

import WebFrameworks from '@/routes/Individual/Granularized/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/WebFrameworks';
import Security from '@/routes/Individual/Granularized/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced/Security';

const Advanced: RouteObject[] = [
    ...WebFrameworks,
    ...Security,
];

export default Advanced;
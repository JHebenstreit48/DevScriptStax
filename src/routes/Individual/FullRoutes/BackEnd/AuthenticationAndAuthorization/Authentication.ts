import { RouteObject } from "react-router-dom";

import Basics from '@/routes/Individual/Granularized/BackEnd/AuthenticationAndAuthorization/Authentication/Basics';
import Advanced from '@/routes/Individual/Granularized/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced';

const Authentication: RouteObject[] = [
    ...Basics,
    ...Advanced,
];

export default Authentication;
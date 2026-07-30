import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/BackEnd/AuthenticationAndAuthorization/Authentication/Basics';
import Advanced from '@/routes/individual/modularized/BackEnd/AuthenticationAndAuthorization/Authentication/Advanced';

const Authentication: RouteObject[] = [
    ...Basics,
    ...Advanced,
];

export default Authentication;
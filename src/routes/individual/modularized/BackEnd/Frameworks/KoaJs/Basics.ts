import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/BackEnd/Frameworks/KoaJs/Basics/Fundamentals';
import Routing from '@/routes/individual/modularized/BackEnd/Frameworks/KoaJs/Basics/Routing';
import Middleware from '@/routes/individual/modularized/BackEnd/Frameworks/KoaJs/Basics/Middleware';
import DataAndBody from '@/routes/individual/modularized/BackEnd/Frameworks/KoaJs/Basics/DataAndBody';
import TemplatesAndStatic from '@/routes/individual/modularized/BackEnd/Frameworks/KoaJs/Basics/TemplatesAndStatic';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Routing,
  ...Middleware,
  ...DataAndBody,
  ...TemplatesAndStatic,
];

export default Basics;

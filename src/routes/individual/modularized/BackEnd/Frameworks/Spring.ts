import { RouteObject } from "react-router-dom";

import SpringBoot from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringBoot';
import SpringMain from '@/routes/individual/modularized/BackEnd/Frameworks/Spring/SpringMain';

const Spring: RouteObject[] = [
  ...SpringBoot,
  ...SpringMain,
];

export default Spring;

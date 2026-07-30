import { RouteObject } from "react-router-dom";

import Django from '@/routes/individual/modularized/BackEnd/Frameworks/Django';
import ExpressJs from '@/routes/individual/modularized/BackEnd/Frameworks/ExpressJs';
import Flask from '@/routes/individual/modularized/BackEnd/Frameworks/Flask';
import KoaJs from '@/routes/individual/modularized/BackEnd/Frameworks/KoaJs';
import NodeJs from '@/routes/individual/modularized/BackEnd/Frameworks/NodeJs';
import RubyOnRails from '@/routes/individual/modularized/BackEnd/Frameworks/RubyOnRails';
import Spring from '@/routes/individual/modularized/BackEnd/Frameworks/Spring';

const Frameworks: RouteObject[] = [
  ...Django,
  ...ExpressJs,
  ...Flask,
  ...KoaJs,
  ...NodeJs,
  ...RubyOnRails,
  ...Spring,
];
export default Frameworks;
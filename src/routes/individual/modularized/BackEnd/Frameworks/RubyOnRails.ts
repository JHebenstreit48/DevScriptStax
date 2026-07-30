import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/BackEnd/Frameworks/RubyOnRails/Basics';
import Advanced from '@/routes/individual/modularized/BackEnd/Frameworks/RubyOnRails/Advanced';

const RubyOnRails: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default RubyOnRails;

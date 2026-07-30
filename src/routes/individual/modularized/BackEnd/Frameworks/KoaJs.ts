import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/BackEnd/Frameworks/KoaJs/Basics';
import Advanced from '@/routes/individual/modularized/BackEnd/Frameworks/KoaJs/Advanced';

const KoaJs: RouteObject[] = [
  ...Basics,
  ...Advanced,
];

export default KoaJs;

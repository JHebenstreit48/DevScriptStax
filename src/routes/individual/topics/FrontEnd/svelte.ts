import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/Svelte/Basics';
import Advanced from '@/routes/individual/modularized/FrontEnd/Svelte/Advanced';

const Svelte: RouteObject[] = [
  ...Basics,
  ...Advanced,
];
export default Svelte;

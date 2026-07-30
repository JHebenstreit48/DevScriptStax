import { RouteObject } from "react-router-dom";

import Basics from '@/routes/individual/modularized/FrontEnd/Markdown/Basics';
import Intermediate from '@/routes/individual/modularized/FrontEnd/Markdown/Intermediate';
import Advanced from '@/routes/individual/modularized/FrontEnd/Markdown/Advanced';

const Markdown: RouteObject[] = [
  ...Basics,
  ...Intermediate,
  ...Advanced,
];
export default Markdown;

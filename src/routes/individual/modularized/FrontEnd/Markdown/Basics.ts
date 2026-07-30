import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/Markdown/Basics/Fundamentals';
import ContentElements from '@/routes/individual/modularized/FrontEnd/Markdown/Basics/ContentElements';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...ContentElements,
];

export default Basics;
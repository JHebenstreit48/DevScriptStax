import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Fundamentals';
import ConfigBasics from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/ConfigBasics';
import Layout from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Layout';
import TypographyAndColor from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/TypographyAndColor';
import Components from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Components';
import WorkflowAndDX from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/WorkflowAndDX';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...ConfigBasics,
  ...Layout,
  ...TypographyAndColor,
  ...Components,
  ...WorkflowAndDX,
];

export default Basics;

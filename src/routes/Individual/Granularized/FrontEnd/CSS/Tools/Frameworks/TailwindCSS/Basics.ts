import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Fundamentals";
import ConfigBasics from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/ConfigBasics";
import Layout from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Layout";
import TypographyAndColor from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/TypographyAndColor";
import Components from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Components";
import WorkflowAndDX from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/WorkflowAndDX";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...ConfigBasics,
  ...Layout,
  ...TypographyAndColor,
  ...Components,
  ...WorkflowAndDX,
];

export default Basics;

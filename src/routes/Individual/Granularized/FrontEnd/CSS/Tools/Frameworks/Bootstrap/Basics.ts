import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Fundamentals";
import Layout from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Layout";
import Utilities from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities";
import TypographyAndContent from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/TypographyAndContent";
import Components from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Layout,
  ...Utilities,
  ...TypographyAndContent,
  ...Components,
];

export default Basics;

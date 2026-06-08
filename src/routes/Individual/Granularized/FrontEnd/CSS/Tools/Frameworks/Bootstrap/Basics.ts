import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Fundamentals";
import Layout from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Layout";
import Utilities from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities";
import TypographyAndContent from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/TypographyAndContent";
import Navigation from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Navigation";
import Overlays from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Overlays";
import DataDisplay from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/DataDisplay";
import Feedback from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Feedback";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Layout,
  ...Utilities,
  ...TypographyAndContent,
  ...Navigation,
  ...Overlays,
  ...DataDisplay,
  ...Feedback
];

export default Basics;

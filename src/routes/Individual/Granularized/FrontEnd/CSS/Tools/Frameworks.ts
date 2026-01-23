import { RouteObject } from "react-router-dom";

import Bootstrap from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap";
import ReactBootstrap from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap";
import TailwindCSS from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS";

const Frameworks: RouteObject[] = [
  ...Bootstrap,
  ...ReactBootstrap,
  ...TailwindCSS,
];

export default Frameworks;

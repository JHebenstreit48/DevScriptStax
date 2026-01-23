import { RouteObject } from "react-router-dom";

import Navigation from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Navigation";
import Overlays from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Overlays";
import DataDisplay from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/DataDisplay";
import Feedback from "@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Components/Feedback";

const Components: RouteObject[] = [
  ...Navigation,
  ...Overlays,
  ...DataDisplay,
  ...Feedback,
];

export default Components;

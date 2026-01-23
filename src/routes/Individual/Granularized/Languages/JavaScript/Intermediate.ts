import { RouteObject } from "react-router-dom";

import DOMAndEvents from "@/routes/Individual/Granularized/Languages/JavaScript/Intermediate/DOMAndEvents";
import ModernJavaScript from "@/routes/Individual/Granularized/Languages/JavaScript/Intermediate/ModernJavaScript";
import ErrorHandling from "@/routes/Individual/Granularized/Languages/JavaScript/Intermediate/ErrorHandling";

const Intermediate: RouteObject[] = [
  ...DOMAndEvents,
  ...ModernJavaScript,
  ...ErrorHandling,
];

export default Intermediate;
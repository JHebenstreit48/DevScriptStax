import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/Fundamentals";
import CoreConcepts from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/CoreConcepts";
import DataTypes from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/DataTypes";
import Functions from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/Functions";
import Arrays from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/Arrays";
import ObjectsJSON from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/ObjectsAndJSON";
import DOMAndEvents from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/DOMAndEvents";
import ModernJavaScript from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/ModernJavaScript";
import ErrorHandling from "@/routes/Individual/Granularized/Languages/JavaScript/Basics/ErrorHandling";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
  ...DataTypes,
  ...Arrays,
  ...ObjectsJSON,
  ...Functions,
  ...DOMAndEvents,
  ...ModernJavaScript,
  ...ErrorHandling
];

export default Basics;
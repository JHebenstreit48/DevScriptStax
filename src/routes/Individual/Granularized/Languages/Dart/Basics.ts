import { RouteObject } from "react-router-dom";

import Fundamentals from "@/routes/Individual/Granularized/Languages/Dart/Basics/Fundamentals";
import Language from "@/routes/Individual/Granularized/Languages/Dart/Basics/Language";
import ControlFlow from "@/routes/Individual/Granularized/Languages/Dart/Basics/ControlFlow";
import Functions from "@/routes/Individual/Granularized/Languages/Dart/Basics/Functions";
import Collections from "@/routes/Individual/Granularized/Languages/Dart/Basics/Collections";
import NullSafety from "@/routes/Individual/Granularized/Languages/Dart/Basics/NullSafety";
import OOP from "@/routes/Individual/Granularized/Languages/Dart/Basics/OOP";

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Language,
  ...ControlFlow,
  ...Functions,
  ...Collections,
  ...NullSafety,
  ...OOP,
];

export default Basics;

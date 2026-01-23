import { RouteObject } from "react-router-dom";

import CLI from "@/routes/Individual/Granularized/Languages/Dart/Tools/CLI";
import PackageMgmt from "@/routes/Individual/Granularized/Languages/Dart/Tools/PackageMgmt";
import IDESupport from "@/routes/Individual/Granularized/Languages/Dart/Tools/IDESupport";
import AnalyzerAndLints from "@/routes/Individual/Granularized/Languages/Dart/Tools/AnalyzerAndLints";

const Tools: RouteObject[] = [
  ...CLI,
  ...PackageMgmt,
  ...IDESupport,
  ...AnalyzerAndLints,
];

export default Tools;

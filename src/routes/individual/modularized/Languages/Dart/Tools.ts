import { RouteObject } from "react-router-dom";

import CLI from '@/routes/individual/modularized/Languages/Dart/Tools/CLI';
import PackageMgmt from '@/routes/individual/modularized/Languages/Dart/Tools/PackageMgmt';
import IDESupport from '@/routes/individual/modularized/Languages/Dart/Tools/IDESupport';
import AnalyzerAndLints from '@/routes/individual/modularized/Languages/Dart/Tools/AnalyzerAndLints';

const Tools: RouteObject[] = [
  ...CLI,
  ...PackageMgmt,
  ...IDESupport,
  ...AnalyzerAndLints,
];

export default Tools;

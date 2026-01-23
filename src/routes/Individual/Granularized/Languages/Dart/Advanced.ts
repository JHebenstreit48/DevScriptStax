import { RouteObject } from "react-router-dom";

import Generics from "@/routes/Individual/Granularized/Languages/Dart/Advanced/Generics";
import AsyncAndStreams from "@/routes/Individual/Granularized/Languages/Dart/Advanced/AsyncAndStreams";
import Isolates from "@/routes/Individual/Granularized/Languages/Dart/Advanced/Isolates";
import Interop from "@/routes/Individual/Granularized/Languages/Dart/Advanced/Interop";
import MetaAndAnno from "@/routes/Individual/Granularized/Languages/Dart/Advanced/MetaAndAnno";
import Performance from "@/routes/Individual/Granularized/Languages/Dart/Advanced/Performance";

const Advanced: RouteObject[] = [
  ...Generics,
  ...AsyncAndStreams,
  ...Isolates,
  ...Interop,
  ...MetaAndAnno,
  ...Performance,
];

export default Advanced;

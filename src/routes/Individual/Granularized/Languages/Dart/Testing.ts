import { RouteObject } from "react-router-dom";

import Unit from "@/routes/Individual/Granularized/Languages/Dart/Testing/Unit";
import FakesAndMocks from "@/routes/Individual/Granularized/Languages/Dart/Testing/FakesAndMocks";
import Integration from "@/routes/Individual/Granularized/Languages/Dart/Testing/Integration";
import QualityAndCI from "@/routes/Individual/Granularized/Languages/Dart/Testing/QualityAndCI";

const Testing: RouteObject[] = [
  ...Unit,
  ...FakesAndMocks,
  ...Integration,
  ...QualityAndCI,
];

export default Testing;

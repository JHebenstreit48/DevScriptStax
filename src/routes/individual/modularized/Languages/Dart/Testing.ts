import { RouteObject } from "react-router-dom";

import Unit from '@/routes/individual/modularized/Languages/Dart/Testing/Unit';
import FakesAndMocks from '@/routes/individual/modularized/Languages/Dart/Testing/FakesAndMocks';
import Integration from '@/routes/individual/modularized/Languages/Dart/Testing/Integration';
import QualityAndCI from '@/routes/individual/modularized/Languages/Dart/Testing/QualityAndCI';

const Testing: RouteObject[] = [
  ...Unit,
  ...FakesAndMocks,
  ...Integration,
  ...QualityAndCI,
];

export default Testing;

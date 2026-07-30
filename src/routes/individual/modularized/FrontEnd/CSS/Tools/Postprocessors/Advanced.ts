import { RouteObject } from "react-router-dom";

import PipelineDesign from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/Advanced/PipelineDesign';
import PerformanceAndDebug from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/Advanced/PerformanceAndDebug';
import SpecializedTransforms from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/Advanced/SpecializedTransforms';
import CompatAndMigration from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/Advanced/CompatAndMigration';

const Advanced: RouteObject[] = [
  ...PipelineDesign,
  ...PerformanceAndDebug,
  ...SpecializedTransforms,
  ...CompatAndMigration,
];

export default Advanced;

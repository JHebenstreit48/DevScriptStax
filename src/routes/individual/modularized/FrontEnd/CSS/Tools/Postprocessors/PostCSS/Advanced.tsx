import { RouteObject } from "react-router-dom";

import PluginAuthoring from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PluginAuthoring';
import PerformanceAndDebug from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PerformanceAndDebug';
import PolyfillsAndTransforms from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/PolyfillsAndTransforms';
import MigrationAndCompat from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/PostCSS/Advanced/MigrationAndCompat';

const Advanced: RouteObject[] = [
  ...PluginAuthoring,
  ...PerformanceAndDebug,
  ...PolyfillsAndTransforms,
  ...MigrationAndCompat,
];

export default Advanced;

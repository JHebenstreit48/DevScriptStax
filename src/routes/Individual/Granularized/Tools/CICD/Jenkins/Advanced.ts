import { RouteObject } from "react-router-dom";

import PluginsAndReuse from "@/routes/Individual/Granularized/Tools/CICD/Jenkins/Advanced/PluginsAndReuse";
import AgentsAndDistributed from "@/routes/Individual/Granularized/Tools/CICD/Jenkins/Advanced/AgentsAndDistributed";
import Security from "@/routes/Individual/Granularized/Tools/CICD/Jenkins/Advanced/Security";
import PerformanceAndScale from "@/routes/Individual/Granularized/Tools/CICD/Jenkins/Advanced/PerformanceAndScale";
import DebugAndTroubleshoot from "@/routes/Individual/Granularized/Tools/CICD/Jenkins/Advanced/DebugAndTroubleshoot";

const Advanced: RouteObject[] = [
  ...PluginsAndReuse,
  ...AgentsAndDistributed,
  ...Security,
  ...PerformanceAndScale,
  ...DebugAndTroubleshoot,
];

export default Advanced;

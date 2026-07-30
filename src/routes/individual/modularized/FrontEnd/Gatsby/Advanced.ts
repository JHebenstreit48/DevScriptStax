import { RouteObject } from "react-router-dom";

import Rendering from '@/routes/individual/modularized/FrontEnd/Gatsby/Advanced/Rendering';
import Performance from '@/routes/individual/modularized/FrontEnd/Gatsby/Advanced/Performance';
import PluginsAndExtensibility from '@/routes/individual/modularized/FrontEnd/Gatsby/Advanced/PluginsAndExtensibility';
import SecurityAndSEO from '@/routes/individual/modularized/FrontEnd/Gatsby/Advanced/SecurityAndSEO';
import Deployment from '@/routes/individual/modularized/FrontEnd/Gatsby/Advanced/Deployment';

const Advanced: RouteObject[] = [
  ...Rendering,
  ...Performance,
  ...PluginsAndExtensibility,
  ...SecurityAndSEO,
  ...Deployment,
];

export default Advanced;

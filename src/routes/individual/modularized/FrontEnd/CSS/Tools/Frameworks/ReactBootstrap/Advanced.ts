import { RouteObject } from "react-router-dom";

import Integration from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Integration';
import Theming from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/Theming';
import SSRAndCodeSplit from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/SSRAndCodeSplit';
import A11yAndTesting from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Advanced/A11yAndTesting';

const Advanced: RouteObject[] = [
  ...Integration,
  ...Theming,
  ...SSRAndCodeSplit,
  ...A11yAndTesting,
];

export default Advanced;

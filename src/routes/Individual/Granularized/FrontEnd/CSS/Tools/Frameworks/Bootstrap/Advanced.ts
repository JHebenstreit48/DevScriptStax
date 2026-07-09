import { RouteObject } from "react-router-dom";

import Theming from '@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Theming';
import JavaScript from '@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/JavaScript';
import Performance from '@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/Performance';
import A11yAndRTL from '@/routes/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced/A11yAndRTL';

const Advanced: RouteObject[] = [
  ...Theming,
  ...JavaScript,
  ...Performance,
  ...A11yAndRTL
];

export default Advanced;

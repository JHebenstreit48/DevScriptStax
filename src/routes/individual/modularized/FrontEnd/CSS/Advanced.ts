import { RouteObject } from "react-router-dom";

import Layouts from '@/routes/individual/modularized/FrontEnd/CSS/Advanced/Layouts';
import Effects from '@/routes/individual/modularized/FrontEnd/CSS/Advanced/Effects';
import ResponsiveAndVariables from '@/routes/individual/modularized/FrontEnd/CSS/Advanced/ResponseAndVar';

const Advanced: RouteObject[] = [
  ...Layouts,
  ...Effects,
  ...ResponsiveAndVariables,
];

export default Advanced;
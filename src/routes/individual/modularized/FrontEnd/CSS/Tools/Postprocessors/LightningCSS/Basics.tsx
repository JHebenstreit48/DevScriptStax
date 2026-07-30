import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Fundamentals';
import Integration from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Integration';
import Features from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Features';
import Workflow from '@/routes/individual/modularized/FrontEnd/CSS/Tools/Postprocessors/LightningCSS/Basics/Workflow';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Integration,
  ...Features,
  ...Workflow,
];

export default Basics;

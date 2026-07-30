import { RouteObject } from "react-router-dom";

import ExtendedSyntax from '@/routes/individual/modularized/FrontEnd/Markdown/Intermediate/ExtendedSyntax';
import InteractiveFeatures from '@/routes/individual/modularized/FrontEnd/Markdown/Intermediate/InteractiveFeatures';

const Intermediate: RouteObject[] = [
  ...ExtendedSyntax,
  ...InteractiveFeatures,
];

export default Intermediate;
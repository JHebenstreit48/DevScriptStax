import { RouteObject } from "react-router-dom";

import MediaAndEmbeds from '@/routes/individual/modularized/FrontEnd/HTML/Intermediate/MediaAndEmbeds';
import TabularData from '@/routes/individual/modularized/FrontEnd/HTML/Intermediate/TabularData';
import HeadAndMeta from '@/routes/individual/modularized/FrontEnd/HTML/Intermediate/HeadAndMeta';

const Intermediate: RouteObject[] = [
  ...MediaAndEmbeds,
  ...TabularData,
  ...HeadAndMeta,
];

export default Intermediate;
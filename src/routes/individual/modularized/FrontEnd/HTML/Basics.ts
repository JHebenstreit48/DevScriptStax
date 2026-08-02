import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/FrontEnd/HTML/Basics/Fundamentals';
import Structure from '@/routes/individual/modularized/FrontEnd/HTML/Basics/Structure';
import HeadAndMeta from '@/routes/individual/modularized/FrontEnd/HTML/Basics/HeadAndMeta';
import FormsSemantics from '@/routes/individual/modularized/FrontEnd/HTML/Basics/FormsSemantics';
import MediaAndEmbeds from '@/routes/individual/modularized/FrontEnd/HTML/Basics/MediaAndEmbeds';
import TabularData from '@/routes/individual/modularized/FrontEnd/HTML/Basics/TabularData';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Structure,
  ...HeadAndMeta,
  ...FormsSemantics,
  ...MediaAndEmbeds,
  ...TabularData
];

export default Basics;
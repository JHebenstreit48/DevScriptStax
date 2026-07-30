import { RouteObject } from "react-router-dom";

import DataModel from '@/routes/individual/modularized/Languages/Python/Advanced/DataModel';
import Typing from '@/routes/individual/modularized/Languages/Python/Advanced/Typing';
import Concurrency from '@/routes/individual/modularized/Languages/Python/Advanced/Concurrency';
import Performance from '@/routes/individual/modularized/Languages/Python/Advanced/Performance';
import Metaprogramming from '@/routes/individual/modularized/Languages/Python/Advanced/Metaprogramming';
import Packaging from '@/routes/individual/modularized/Languages/Python/Advanced/Packaging';

const Advanced: RouteObject[] = [
  ...DataModel,
  ...Typing,
  ...Concurrency,
  ...Performance,
  ...Metaprogramming,
  ...Packaging,
];

export default Advanced;
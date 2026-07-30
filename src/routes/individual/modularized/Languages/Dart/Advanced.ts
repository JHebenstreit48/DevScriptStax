import { RouteObject } from "react-router-dom";

import Generics from '@/routes/individual/modularized/Languages/Dart/Advanced/Generics';
import AsyncAndStreams from '@/routes/individual/modularized/Languages/Dart/Advanced/AsyncAndStreams';
import Isolates from '@/routes/individual/modularized/Languages/Dart/Advanced/Isolates';
import Interop from '@/routes/individual/modularized/Languages/Dart/Advanced/Interop';
import MetaAndAnno from '@/routes/individual/modularized/Languages/Dart/Advanced/MetaAndAnno';
import Performance from '@/routes/individual/modularized/Languages/Dart/Advanced/Performance';

const Advanced: RouteObject[] = [
  ...Generics,
  ...AsyncAndStreams,
  ...Isolates,
  ...Interop,
  ...MetaAndAnno,
  ...Performance,
];

export default Advanced;

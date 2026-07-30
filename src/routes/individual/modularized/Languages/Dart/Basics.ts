import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Languages/Dart/Basics/Fundamentals';
import Language from '@/routes/individual/modularized/Languages/Dart/Basics/Language';
import ControlFlow from '@/routes/individual/modularized/Languages/Dart/Basics/ControlFlow';
import Functions from '@/routes/individual/modularized/Languages/Dart/Basics/Functions';
import Collections from '@/routes/individual/modularized/Languages/Dart/Basics/Collections';
import NullSafety from '@/routes/individual/modularized/Languages/Dart/Basics/NullSafety';
import OOP from '@/routes/individual/modularized/Languages/Dart/Basics/OOP';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...Language,
  ...ControlFlow,
  ...Functions,
  ...Collections,
  ...NullSafety,
  ...OOP,
];

export default Basics;

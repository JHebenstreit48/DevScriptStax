import { RouteObject } from "react-router-dom";

import Fundamentals from '@/routes/individual/modularized/Languages/JavaScript/Basics/Fundamentals';
import CoreConcepts from '@/routes/individual/modularized/Languages/JavaScript/Basics/CoreConcepts';
import DataTypes from '@/routes/individual/modularized/Languages/JavaScript/Basics/DataTypes';
import Functions from '@/routes/individual/modularized/Languages/JavaScript/Basics/Functions';
import Arrays from '@/routes/individual/modularized/Languages/JavaScript/Basics/Arrays';
import ObjectsJSON from '@/routes/individual/modularized/Languages/JavaScript/Basics/ObjectsAndJSON';
import DOMAndEvents from '@/routes/individual/modularized/Languages/JavaScript/Basics/DOMAndEvents';
import ModernJavaScript from '@/routes/individual/modularized/Languages/JavaScript/Basics/ModernJavaScript';
import ErrorHandling from '@/routes/individual/modularized/Languages/JavaScript/Basics/ErrorHandling';

const Basics: RouteObject[] = [
  ...Fundamentals,
  ...CoreConcepts,
  ...DataTypes,
  ...Arrays,
  ...ObjectsJSON,
  ...Functions,
  ...DOMAndEvents,
  ...ModernJavaScript,
  ...ErrorHandling
];

export default Basics;
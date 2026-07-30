import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/Languages/JavaScript/Basics/Fundamentals';
import CoreConcepts from '@/navigation/individual/modularized/Languages/JavaScript/Basics/CoreConcepts';
import DataTypes from '@/navigation/individual/modularized/Languages/JavaScript/Basics/DataTypes';
import Functions from '@/navigation/individual/modularized/Languages/JavaScript/Basics/Functions';
import Arrays from '@/navigation/individual/modularized/Languages/JavaScript/Basics/Arrays';
import ObjectsAndJSON from '@/navigation/individual/modularized/Languages/JavaScript/Basics/ObjectsAndJSON';
import DOMAndEvents from '@/navigation/individual/modularized/Languages/JavaScript/Basics/DOMAndEvent';
import ModernES6 from '@/navigation/individual/modularized/Languages/JavaScript/Basics/ModernES6';
import ErrorHandling from '@/navigation/individual/modularized/Languages/JavaScript/Basics/ErrorHandling';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CoreConcepts,
    DataTypes,
    Functions,
    Arrays,
    ObjectsAndJSON,
    DOMAndEvents,
    ModernES6,
    ErrorHandling
  ]
};

export default Basics;
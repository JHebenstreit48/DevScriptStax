import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/Fundamentals';
import CoreConcepts from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/CoreConcepts';
import DataTypes from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/DataTypes';
import Functions from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/Functions';
import Arrays from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/Arrays';
import ObjectsAndJSON from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/ObjectsAndJSON';
import DOMAndEvents from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/DOMAndEvent';
import ModernES6 from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/ModernES6';
import ErrorHandling from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/ErrorHandling';

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
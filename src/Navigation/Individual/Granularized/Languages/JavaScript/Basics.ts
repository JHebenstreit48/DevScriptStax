import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/Fundamentals';
import CoreConcepts from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/CoreConcepts';
import DataTypes from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/DataTypes';
import Arrays from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/Arrays';
import ObjectsAndJSON from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/ObjectsAndJSON';
import Functions from '@/Navigation/Individual/Granularized/Languages/JavaScript/Basics/Functions';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    CoreConcepts,
    DataTypes,
    Arrays,
    ObjectsAndJSON,
    Functions
  ]
};

export default Basics;
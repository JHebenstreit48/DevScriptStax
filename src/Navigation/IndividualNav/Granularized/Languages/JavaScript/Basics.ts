import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Basics/Fundamentals';
import CoreConcepts from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Basics/CoreConcepts';
import DataTypes from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Basics/DataTypes';
import Arrays from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Basics/Arrays';
import ObjectsAndJSON from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Basics/ObjectsAndJSON';
import Functions from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Basics/Functions';

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
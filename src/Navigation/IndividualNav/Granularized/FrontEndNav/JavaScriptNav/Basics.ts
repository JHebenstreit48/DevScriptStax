import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Basics/Fundamentals';
import CoreConcepts from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Basics/CoreConcepts';
import DataTypes from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Basics/DataTypes';
import Arrays from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Basics/Arrays';
import ObjectsAndJSON from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Basics/ObjectsAndJSON';
import Functions from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/Basics/Functions';

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
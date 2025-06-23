import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import PythonBasics from '@/Navigation/IndividualNav/Granularized/LanguagesNav/PythonNav/Basics';
import PythonIntermediate from '@/Navigation/IndividualNav/Granularized/LanguagesNav/PythonNav/Intermediate';
import PythonAdvanced from '@/Navigation/IndividualNav/Granularized/LanguagesNav/PythonNav/Advanced';

const PythonNav: Subpage = {
  name: 'Python',
  subpages: [
    PythonBasics,
    PythonIntermediate,
    PythonAdvanced
  ]
};

export default PythonNav;

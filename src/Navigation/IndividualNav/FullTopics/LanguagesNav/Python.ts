import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/LanguagesNav/PythonNav/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/LanguagesNav/PythonNav/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/LanguagesNav/PythonNav/Advanced';

const PythonNav: Subpage = {
  name: 'Python',
  subpages: [
    Basics,
    Intermediate,
    Advanced
  ]
};

export default PythonNav;

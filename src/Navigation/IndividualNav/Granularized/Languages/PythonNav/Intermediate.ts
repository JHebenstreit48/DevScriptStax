import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import FileAndData from '@/Navigation/IndividualNav/Granularized/LanguagesNav/PythonNav/Intermediate/FileAndData';
import Async from '@/Navigation/IndividualNav/Granularized/LanguagesNav/PythonNav/Intermediate/Async';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    FileAndData,
    Async
  ]
};

export default Intermediate;
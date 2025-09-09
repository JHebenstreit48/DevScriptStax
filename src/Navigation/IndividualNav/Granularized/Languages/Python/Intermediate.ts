import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import FileAndData from '@/Navigation/IndividualNav/Granularized/Languages/Python/Intermediate/FileAndData';
import Async from '@/Navigation/IndividualNav/Granularized/Languages/Python/Intermediate/Async';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    FileAndData,
    Async
  ]
};

export default Intermediate;
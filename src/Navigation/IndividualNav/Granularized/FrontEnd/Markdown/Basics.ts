import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEnd/Markdown/Basics/Fundamentals';
import ContentElements from '@/Navigation/IndividualNav/Granularized/FrontEnd/Markdown/Basics/ContentElements';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    ContentElements
  ]
};

export default Basics;
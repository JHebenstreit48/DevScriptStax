import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEndNav/MarkdownNav/Basics/Fundamentals';
import ContentElements from '@/Navigation/IndividualNav/Granularized/FrontEndNav/MarkdownNav/Basics/ContentElements';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    ContentElements
  ]
};

export default Basics;
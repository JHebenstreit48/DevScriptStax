import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Fundamentals from '@/Navigation/Individual/Granularized/FrontEnd/Markdown/Basics/Fundamentals';
import ContentElements from '@/Navigation/Individual/Granularized/FrontEnd/Markdown/Basics/ContentElements';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    ContentElements
  ]
};

export default Basics;
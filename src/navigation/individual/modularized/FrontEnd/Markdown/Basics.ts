import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/FrontEnd/Markdown/Basics/Fundamentals';
import ContentElements from '@/navigation/individual/modularized/FrontEnd/Markdown/Basics/ContentElements';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    ContentElements
  ]
};

export default Basics;
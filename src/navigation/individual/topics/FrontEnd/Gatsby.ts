import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/Gatsby/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/Gatsby/Advanced';

const Gatsby: Subpage = {
name : 'Gatsby',
subpages: [
    Basics,
    Advanced
  ]
};

export default Gatsby;
import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/Gatsby/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/Gatsby/Advanced';

const Gatsby: Subpage = {
name : 'Gatsby',
subpages: [
    Basics,
    Advanced
  ]
};

export default Gatsby;
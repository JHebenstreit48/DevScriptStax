import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics';
import Advanced from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Advanced';

const Bootstrap: Subpage = {
  name: 'Bootstrap',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default Bootstrap;
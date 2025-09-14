import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/Tailwind/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/Tailwind/Advanced';

const TailwindCSS: Subpage = {
  name: 'Tailwind CSS',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default TailwindCSS;
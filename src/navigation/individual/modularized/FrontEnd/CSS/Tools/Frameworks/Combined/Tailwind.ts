import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Tailwind/Basics';
import Advanced from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Tailwind/Advanced';

const TailwindCSS: Subpage = {
  name: 'Tailwind CSS',
  subpages: [
    Basics,
    Advanced,
  ],
};

export default TailwindCSS;
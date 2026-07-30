import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Fundamentals';
import Layout from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Layout';
import Utilities from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities';
import TypographyAndContent from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/TypographyAndContent';
import Navigation from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Navigation';
import Overlays from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Overlays';
import DataDisplay from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/DataDisplay';
import Feedback from '@/navigation/individual/modularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Feedback';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Layout,
    Utilities,
    TypographyAndContent,
    Navigation,
    Overlays,
    DataDisplay,
    Feedback,
  ],
};

export default Basics;
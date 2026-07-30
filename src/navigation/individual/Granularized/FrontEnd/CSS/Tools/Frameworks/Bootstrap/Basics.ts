import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Fundamentals';
import Layout from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Layout';
import Utilities from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Utilities';
import TypographyAndContent from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/TypographyAndContent';
import Navigation from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Navigation';
import Overlays from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Overlays';
import DataDisplay from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/DataDisplay';
import Feedback from '@/Navigation/Individual/Granularized/FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Feedback';

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
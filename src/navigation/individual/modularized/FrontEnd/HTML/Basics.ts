import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/FrontEnd/HTML/Basics/Fundamentals';
import Structure from '@/navigation/individual/modularized/FrontEnd/HTML/Basics/Structure';
import HeadAndMeta from '@/navigation/individual/modularized/FrontEnd/HTML/Basics/HeadAndMeta';
import FormsAndSemantics from '@/navigation/individual/modularized/FrontEnd/HTML/Basics/FormsAndSemantics';
import MediaAndEmbeds from '@/navigation/individual/modularized/FrontEnd/HTML/Basics/MediaAndEmbeds';
import TabularData from '@/navigation/individual/modularized/FrontEnd/HTML/Basics/TabularData';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    Structure,
    HeadAndMeta,
    FormsAndSemantics,
    MediaAndEmbeds,
    TabularData
  ]
};

export default Basics;
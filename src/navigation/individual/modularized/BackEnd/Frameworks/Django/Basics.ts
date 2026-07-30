import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/BackEnd/Frameworks/Django/Basics/Fundamentals';
import ModelsAndDB from '@/navigation/individual/modularized/BackEnd/Frameworks/Django/Basics/ModelsAndDB';
import ViewsAndTemplates from '@/navigation/individual/modularized/BackEnd/Frameworks/Django/Basics/ViewsAndTemplates';
import Forms from '@/navigation/individual/modularized/BackEnd/Frameworks/Django/Basics/Forms';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    Fundamentals,
    ModelsAndDB,
    ViewsAndTemplates,
    Forms
  ]
};

export default Basics;
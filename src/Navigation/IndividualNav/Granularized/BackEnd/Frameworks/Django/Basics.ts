import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Fundamentals from '@/Navigation/IndividualNav/Granularized/BackEnd/Frameworks/Django/Basics/Fundamentals';
import ModelsAndDB from '@/Navigation/IndividualNav/Granularized/BackEnd/Frameworks/Django/Basics/ModelsAndDB';
import ViewsAndTemplates from '@/Navigation/IndividualNav/Granularized/BackEnd/Frameworks/Django/Basics/ViewsAndTemplates';
import Forms from '@/Navigation/IndividualNav/Granularized/BackEnd/Frameworks/Django/Basics/Forms';

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
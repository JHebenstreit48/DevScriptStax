import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Fundamentals from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Django/Basics/Fundamentals';
import ModelsAndDB from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Django/Basics/ModelsAndDB';
import ViewsAndTemplates from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Django/Basics/ViewsAndTemplates';
import Forms from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Django/Basics/Forms';

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
import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/BackEnd/Frameworks/Django/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/BackEnd/Frameworks/Django/Advanced';

const Django: Subpage = {
name: 'Django',
subpages: [
    Basics,
    Advanced
]
};

export default Django;
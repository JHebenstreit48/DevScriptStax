import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Django/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Django/Advanced';

const Django: Subpage = {
name: 'Django',
subpages: [
    Basics,
    Advanced
]
};

export default Django;
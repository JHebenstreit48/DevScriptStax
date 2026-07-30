import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Frameworks/Django/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/Frameworks/Django/Advanced';

const Django: Subpage = {
name: 'Django',
subpages: [
    Basics,
    Advanced
]
};

export default Django;
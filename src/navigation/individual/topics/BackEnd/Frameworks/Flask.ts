import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Frameworks/Flask/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/Frameworks/Flask/Advanced';

const Flask: Subpage = {
name: 'Flask',
subpages: [
    Basics,
    Advanced
]
};

export default Flask;
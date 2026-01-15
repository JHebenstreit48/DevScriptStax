import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Flask/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/Flask/Advanced';

const Flask: Subpage = {
name: 'Flask',
subpages: [
    Basics,
    Advanced
]
};

export default Flask;
import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Databases/MySQL/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Databases/MySQL/Advanced';

const MySQL: Subpage = {
name: 'MySQL',
subpages: [
    Basics,
    Advanced
]
};

export default MySQL;
import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Databases/Redis/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/Databases/Redis/Advanced';

const Redis: Subpage = {
name: 'Redis',
subpages: [
    Basics,
    Advanced
]
};

export default Redis;
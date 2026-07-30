import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Databases/MySQL/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/Databases/MySQL/Advanced';

const MySQL: Subpage = {
name: 'MySQL',
subpages: [
    Basics,
    Advanced
]
};

export default MySQL;
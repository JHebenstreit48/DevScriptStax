import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Basics';
import Intermediate from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Intermediate';
import Advanced from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Advanced';
import Tools from '@/navigation/individual/modularized/BackEnd/Databases/PostgreSQL/Tools';

const PostgreSQL: Subpage = {
name: 'PostgreSQL',
subpages: [
    Basics,
    Intermediate,
    Advanced,
    Tools
]
};

export default PostgreSQL;
import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Basics';
import Intermediate from '@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Intermediate';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Advanced';
import Tools from '@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Tools';

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
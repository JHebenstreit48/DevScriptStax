import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Basics';
import Intermediate from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Intermediate';
import Advanced from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Advanced';
import Tools from '@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Tools';

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
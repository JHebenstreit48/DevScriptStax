import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/Databases/Redis/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/Databases/Redis/Advanced';

const Redis: Subpage = {
name: 'Redis',
subpages: [
    Basics,
    Advanced
]
};

export default Redis;
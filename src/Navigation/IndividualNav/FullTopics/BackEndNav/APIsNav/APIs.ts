import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Advanced';
import REST from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/REST';

const APIs: Subpage = {
    name: "APIs",
    subpages: [
        Basics,
        Advanced,
        REST
    ]
};

export default APIs;
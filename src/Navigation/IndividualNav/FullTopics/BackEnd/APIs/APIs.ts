import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/BackEnd/APIs/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/BackEnd/APIs/Advanced';
import REST from '@/Navigation/IndividualNav/Granularized/BackEnd/APIs/REST';

const APIs: Subpage = {
    name: "APIs",
    subpages: [
        Basics,
        Advanced,
        REST
    ]
};

export default APIs;
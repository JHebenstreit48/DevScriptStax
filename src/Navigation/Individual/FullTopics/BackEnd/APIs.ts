import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/BackEnd/APIs/Basics';
import Advanced from '@/Navigation/Individual/Granularized/BackEnd/APIs/Advanced';
import REST from '@/Navigation/Individual/Granularized/BackEnd/APIs/REST';

const APIs: Subpage = {
    name: "APIs",
    subpages: [
        Basics,
        Advanced,
        REST
    ]
};

export default APIs;
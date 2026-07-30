import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/BackEnd/APIs/Basics';
import Advanced from '@/navigation/individual/modularized/BackEnd/APIs/Advanced';
import REST from '@/navigation/individual/modularized/BackEnd/APIs/REST';

const APIs: Subpage = {
    name: "APIs",
    subpages: [
        Basics,
        Advanced,
        REST
    ]
};

export default APIs;
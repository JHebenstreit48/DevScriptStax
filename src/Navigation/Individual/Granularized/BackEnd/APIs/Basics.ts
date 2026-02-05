import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/BackEnd/APIs/Basics/Fundamentals';
import Documentation from '@/Navigation/Individual/Granularized/BackEnd/APIs/Basics/Documentation';
import Types from '@/Navigation/Individual/Granularized/BackEnd/APIs/Basics/Types';
import HTTPClients from '@/Navigation/Individual/Granularized/BackEnd/APIs/Basics/HTTPClients';

const Basics: Subpage = {
    name: "Basics",
    subpages: [
        Fundamentals,
        Documentation,
        Types,
        HTTPClients,
    ]
};

export default Basics;
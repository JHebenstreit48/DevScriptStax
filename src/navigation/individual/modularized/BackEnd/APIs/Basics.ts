import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/BackEnd/APIs/Basics/Fundamentals';
import Documentation from '@/navigation/individual/modularized/BackEnd/APIs/Basics/Documentation';
import Types from '@/navigation/individual/modularized/BackEnd/APIs/Basics/Types';
import HTTPClients from '@/navigation/individual/modularized/BackEnd/APIs/Basics/HTTPClients';

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
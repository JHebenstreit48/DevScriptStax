import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from '@/Navigation/IndividualNav/Granularized/BackEnd/APIs/Basics/Fundamentals';
import Documentation from '@/Navigation/IndividualNav/Granularized/BackEnd/APIs/Basics/Documentation';
import Types from '@/Navigation/IndividualNav/Granularized/BackEnd/APIs/Basics/Types';

const Basics: Subpage = {
    name: "Basics",
    subpages: [
        Fundamentals,
        Documentation,
        Types
    ]
};

export default Basics;
import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Basics/Fundamentals';
import Documentation from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Basics/Documentation';
import Types from '@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Basics/Types';

const Basics: Subpage = {
    name: "Basics",
    subpages: [
        Fundamentals,
        Documentation,
        Types
    ]
};

export default Basics;
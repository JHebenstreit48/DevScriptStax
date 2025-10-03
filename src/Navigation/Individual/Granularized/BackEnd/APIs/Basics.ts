import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Fundamentals from '@/Navigation/Individual/Granularized/BackEnd/APIs/Basics/Fundamentals';
import Documentation from '@/Navigation/Individual/Granularized/BackEnd/APIs/Basics/Documentation';
import Types from '@/Navigation/Individual/Granularized/BackEnd/APIs/Basics/Types';

const Basics: Subpage = {
    name: "Basics",
    subpages: [
        Fundamentals,
        Documentation,
        Types
    ]
};

export default Basics;
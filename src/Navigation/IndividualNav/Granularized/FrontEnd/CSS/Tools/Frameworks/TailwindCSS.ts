import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Fundamentals';
import Utilities from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Utilities';
import Components from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Components';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced';

const TailwindCSS: Subpage = {
    name: "Tailwind CSS",
    subpages: [
        Fundamentals,
        Utilities,
        Components,
        Advanced
    ]
};

export default TailwindCSS;
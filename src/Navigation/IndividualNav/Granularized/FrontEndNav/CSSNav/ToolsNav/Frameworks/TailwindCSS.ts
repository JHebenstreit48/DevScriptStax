import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Frameworks/TailwindCSS/Fundamentals';
import Utilities from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Frameworks/TailwindCSS/Utilities';
import Components from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Frameworks/TailwindCSS/Components';
import Advanced from '@/Navigation/IndividualNav/Granularized/FrontEndNav/CSSNav/ToolsNav/Frameworks/TailwindCSS/Advanced';

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
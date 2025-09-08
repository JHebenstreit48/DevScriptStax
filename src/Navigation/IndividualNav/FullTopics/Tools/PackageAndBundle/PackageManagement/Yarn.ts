import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from '@/Navigation/IndividualNav/Granularized/ToolsNav/PackageAndBundle/PackageManagement/YarnNav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/ToolsNav/PackageAndBundle/PackageManagement/YarnNav/Advanced';

const Yarn: Subpage = {
    name: "Yarn",
    subpages: [
        Basics,
        Advanced
    ]
};

export default Yarn;
import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Components from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Basics/CoreConcepts/Components";
import Modules from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Basics/CoreConcepts/Modules";
import Services from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Basics/CoreConcepts/Services";
import Routing from "@/Navigation/IndividualNav/Granularized/FrontEndNav/AngularNav/Basics/CoreConcepts/Routing";

const CoreConcepts: Subpage = {
...Components,
...Modules,
...Services,
...Routing
};

export default CoreConcepts;
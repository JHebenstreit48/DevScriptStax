import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Components from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Components";
import Modules from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Modules";
import Services from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Services";
import Routing from "@/Navigation/IndividualNav/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Routing";

const CoreConcepts: Subpage = {
  name: "Core Concepts",
  subpages: [
    Components,
    Modules,
    Services,
    Routing
  ],
};

export default CoreConcepts;

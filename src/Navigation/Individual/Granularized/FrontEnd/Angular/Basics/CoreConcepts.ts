import type { Subpage } from '@/types/navigation';

import Components from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Components";
import Modules from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Modules";
import Services from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Services";
import Routing from "@/Navigation/Individual/Granularized/FrontEnd/Angular/Basics/CoreConcepts/Routing";

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
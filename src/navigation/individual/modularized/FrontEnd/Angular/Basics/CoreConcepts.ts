import type { Subpage } from '@/types/navigation';

import Components from '@/navigation/individual/modularized/FrontEnd/Angular/Basics/CoreConcepts/Components';
import Modules from '@/navigation/individual/modularized/FrontEnd/Angular/Basics/CoreConcepts/Modules';
import Services from '@/navigation/individual/modularized/FrontEnd/Angular/Basics/CoreConcepts/Services';
import Routing from '@/navigation/individual/modularized/FrontEnd/Angular/Basics/CoreConcepts/Routing';

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
import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/navigation/individual/modularized/BackEnd/Frameworks/ExpressJS/Basics/Fundamentals';
import Routing from '@/navigation/individual/modularized/BackEnd/Frameworks/ExpressJS/Basics/Routing';
import Middleware from '@/navigation/individual/modularized/BackEnd/Frameworks/ExpressJS/Basics/Middleware';
import DataHandling from '@/navigation/individual/modularized/BackEnd/Frameworks/ExpressJS/Basics/DataHandling';
import ViewsAndStatic from '@/navigation/individual/modularized/BackEnd/Frameworks/ExpressJS/Basics/ViewsAndStatic';

const Basics: Subpage = {
  name: "Basics",
  subpages: [
    Fundamentals,
    Routing,
    Middleware,
    DataHandling,
    ViewsAndStatic
  ]
};

export default Basics;
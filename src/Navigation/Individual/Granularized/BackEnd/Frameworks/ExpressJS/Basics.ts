import type { Subpage } from '@/types/navigation';

import Fundamentals from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/ExpressJS/Basics/Fundamentals';
import Routing from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/ExpressJS/Basics/Routing';
import Middleware from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/ExpressJS/Basics/Middleware';
import DataHandling from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/ExpressJS/Basics/DataHandling';
import ViewsAndStatic from '@/Navigation/Individual/Granularized/BackEnd/Frameworks/ExpressJS/Basics/ViewsAndStatic';

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
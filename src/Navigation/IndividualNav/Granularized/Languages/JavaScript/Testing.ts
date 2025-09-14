import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Testing/Fundamentals';
import Tools from '@/Navigation/IndividualNav/Granularized/FrontEnd/JavaScript/Testing/Tools';

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    Fundamentals,
    Tools
  ],
};

export default Testing;
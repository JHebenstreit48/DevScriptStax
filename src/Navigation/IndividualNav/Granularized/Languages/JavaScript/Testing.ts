import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Testing/Fundamentals';
import Tools from '@/Navigation/IndividualNav/Granularized/Languages/JavaScript/Testing/Tools';

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    Fundamentals,
    Tools
  ],
};

export default Testing;
import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Fundamentals from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/TestingNav/Fundamentals';
import Tools from '@/Navigation/IndividualNav/Granularized/FrontEndNav/JavaScriptNav/TestingNav/Tools';

const Testing: Subpage = {
  name: "Testing",
  subpages: [
    Fundamentals,
    Tools
  ],
};

export default Testing;
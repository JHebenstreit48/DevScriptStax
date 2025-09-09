import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Tools/CICD/Jenkins/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Tools/CICD/Jenkins/Advanced";

const Jenkins: Subpage = {
  name: "Jenkins",
  subpages: [
    Basics,
    Advanced
  ],
};

export default Jenkins;
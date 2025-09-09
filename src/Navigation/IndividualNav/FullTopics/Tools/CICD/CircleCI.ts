import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Tools/CICD/CircleCI/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Tools/CICD/CircleCI/Advanced";

const CircleCI: Subpage = {
  name: "CircleCI",
  subpages: [
    Basics,
    Advanced
  ],
};

export default CircleCI;
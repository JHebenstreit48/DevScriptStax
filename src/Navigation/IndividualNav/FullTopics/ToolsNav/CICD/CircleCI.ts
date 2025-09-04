import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/ToolsNav/CICD/CircleCINav/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/ToolsNav/CICD/CircleCINav/Advanced";

const CircleCI: Subpage = {
  name: "CircleCI",
  subpages: [
    Basics,
    Advanced
  ],
};

export default CircleCI;
import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Basics from "@/Navigation/Individual/Granularized/Tools/CICD/CircleCI/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Tools/CICD/CircleCI/Advanced";

const CircleCI: Subpage = {
  name: "CircleCI",
  subpages: [
    Basics,
    Advanced
  ],
};

export default CircleCI;
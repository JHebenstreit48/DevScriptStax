import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Basics from "@/Navigation/Individual/Granularized/Tools/CICD/Jenkins/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Tools/CICD/Jenkins/Advanced";

const Jenkins: Subpage = {
  name: "Jenkins",
  subpages: [
    Basics,
    Advanced
  ],
};

export default Jenkins;
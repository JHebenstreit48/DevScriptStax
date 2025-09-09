import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Basics from "@/Navigation/IndividualNav/Granularized/Tools/PackageAndBundle/Bundling/WebpackNav/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/Tools/PackageAndBundle/Bundling/WebpackNav/Advanced";

const Webpack: Subpage = {
  name: "Webpack",
  subpages: [
    Basics,
    Advanced
  ],
};

export default Webpack;
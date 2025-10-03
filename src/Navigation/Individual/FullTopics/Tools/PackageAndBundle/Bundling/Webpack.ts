import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Basics from "@/Navigation/Individual/Granularized/Tools/PackageAndBundle/Bundling/Webpack/Basics";
import Advanced from "@/Navigation/Individual/Granularized/Tools/PackageAndBundle/Bundling/Webpack/Advanced";

const Webpack: Subpage = {
  name: "Webpack",
  subpages: [
    Basics,
    Advanced
  ],
};

export default Webpack;
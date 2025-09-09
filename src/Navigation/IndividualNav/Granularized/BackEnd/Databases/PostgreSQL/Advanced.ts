import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import AdvancedSQL from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL";
import Views from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/PostgreSQL/Advanced/Views";
import JSONAndJSONB from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/PostgreSQL/Advanced/JSONAndJSONB";
import ExtensionsAndFDW from "@/Navigation/IndividualNav/Granularized/BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    AdvancedSQL,
    Views,
    JSONAndJSONB,
    ExtensionsAndFDW
  ]
};

export default Advanced;
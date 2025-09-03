import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import AdvancedSQL from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Advanced/AdvancedSQL";
import Views from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Advanced/Views";
import JSONAndJSONB from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Advanced/JSONAndJSONB";
import ExtensionsAndFDW from "@/Navigation/IndividualNav/Granularized/BackEndNav/DatabaseNav/PostgreSQL/Advanced/ExtensionsAndFDW";

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
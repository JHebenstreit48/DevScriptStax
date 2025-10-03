import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import AdvancedSQL from "@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Advanced/AdvancedSQL";
import Views from "@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Advanced/Views";
import JSONAndJSONB from "@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Advanced/JSONAndJSONB";
import ExtensionsAndFDW from "@/Navigation/Individual/Granularized/BackEnd/Databases/PostgreSQL/Advanced/ExtensionsAndFDW";

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
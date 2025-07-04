import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Gateways from "@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Advanced/Gateways";
import Caching from "@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Advanced/Caching";
import RateLimiting from "@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Advanced/RateLimiting";
import Versioning from "@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Advanced/Versioning";
import Webhooks from "@/Navigation/IndividualNav/Granularized/BackEndNav/APINav/Advanced/Webhooks";

const APIsAdvanced: Subpage = {
    name: "Advanced",
    subpages: [
        Gateways,
        Caching,
        RateLimiting,
        Versioning,
        Webhooks
    ],
};

export default APIsAdvanced;
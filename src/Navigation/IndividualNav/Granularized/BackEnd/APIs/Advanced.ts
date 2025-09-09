import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

import Gateways from "@/Navigation/IndividualNav/Granularized/BackEnd/APIs/Advanced/Gateways";
import Caching from "@/Navigation/IndividualNav/Granularized/BackEnd/APIs/Advanced/Caching";
import RateLimiting from "@/Navigation/IndividualNav/Granularized/BackEnd/APIs/Advanced/RateLimiting";
import Versioning from "@/Navigation/IndividualNav/Granularized/BackEnd/APIs/Advanced/Versioning";
import Webhooks from "@/Navigation/IndividualNav/Granularized/BackEnd/APIs/Advanced/Webhooks";

const Advanced: Subpage = {
    name: "Advanced",
    subpages: [
        Gateways,
        Caching,
        RateLimiting,
        Versioning,
        Webhooks
    ],
};

export default Advanced;
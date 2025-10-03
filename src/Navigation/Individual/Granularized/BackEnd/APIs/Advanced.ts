import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

import Gateways from "@/Navigation/Individual/Granularized/BackEnd/APIs/Advanced/Gateways";
import Caching from "@/Navigation/Individual/Granularized/BackEnd/APIs/Advanced/Caching";
import RateLimiting from "@/Navigation/Individual/Granularized/BackEnd/APIs/Advanced/RateLimiting";
import Versioning from "@/Navigation/Individual/Granularized/BackEnd/APIs/Advanced/Versioning";
import Webhooks from "@/Navigation/Individual/Granularized/BackEnd/APIs/Advanced/Webhooks";

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
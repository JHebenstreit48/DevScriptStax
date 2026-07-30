import type { Subpage } from '@/types/navigation';

import Gateways from '@/navigation/individual/modularized/BackEnd/APIs/Advanced/Gateways';
import Caching from '@/navigation/individual/modularized/BackEnd/APIs/Advanced/Caching';
import RateLimiting from '@/navigation/individual/modularized/BackEnd/APIs/Advanced/RateLimiting';
import Versioning from '@/navigation/individual/modularized/BackEnd/APIs/Advanced/Versioning';
import Webhooks from '@/navigation/individual/modularized/BackEnd/APIs/Advanced/Webhooks';

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
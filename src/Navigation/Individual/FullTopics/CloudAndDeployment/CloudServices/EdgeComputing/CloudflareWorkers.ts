import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from "@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/ClouldFlareWorkers/Basics";
import Advanced from "@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/ClouldFlareWorkers/Advanced";

const CloudflareWorkers: Subpage = {
    name: 'Cloudflare Workers',
    subpages: [
        Basics,
        Advanced
    ]
};

export default CloudflareWorkers;
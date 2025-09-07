import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from "@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/ClouldFlareWorkers/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/ClouldFlareWorkers/Advanced";

const CloudflareWorkers: Subpage = {
    name: 'Cloudflare Workers',
    subpages: [
        Basics,
        Advanced
    ]
};

export default CloudflareWorkers;
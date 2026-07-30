import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/EdgeComputing/ClouldFlareWorkers/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/EdgeComputing/ClouldFlareWorkers/Advanced';

const CloudflareWorkers: Subpage = {
    name: 'Cloudflare Workers',
    subpages: [
        Basics,
        Advanced
    ]
};

export default CloudflareWorkers;
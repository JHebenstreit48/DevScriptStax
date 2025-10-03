import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from "@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/AkamiEdgeWorkers/Basics";
import Advanced from "@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/AkamiEdgeWorkers/Advanced";

const AkamaiEdgeWorkers: Subpage = {
    name: 'Akamai Edge Workers',
    subpages: [
        Basics,
        Advanced
    ]
};

export default AkamaiEdgeWorkers;
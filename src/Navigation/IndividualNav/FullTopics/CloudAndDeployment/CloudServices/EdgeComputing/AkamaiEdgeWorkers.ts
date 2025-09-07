import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from "@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/AkamiEdgeWorkers/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/EdgeComputing/AkamiEdgeWorkers/Advanced";

const AkamaiEdgeWorkers: Subpage = {
    name: 'Akamai Edge Workers',
    subpages: [
        Basics,
        Advanced
    ]
};

export default AkamaiEdgeWorkers;
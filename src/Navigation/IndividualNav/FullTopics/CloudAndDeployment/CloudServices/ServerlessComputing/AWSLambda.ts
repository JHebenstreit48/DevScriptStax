import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from "@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics";
import Advanced from "@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced";

const AWSLambda: Subpage = {
    name: 'AWS Lambda',
    subpages: [
        Basics,
        Advanced
    ]
};

export default AWSLambda;
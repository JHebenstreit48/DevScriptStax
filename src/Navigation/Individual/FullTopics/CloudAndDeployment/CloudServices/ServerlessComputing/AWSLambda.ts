import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from "@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics";
import Advanced from "@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced";

const AWSLambda: Subpage = {
    name: 'AWS Lambda',
    subpages: [
        Basics,
        Advanced
    ]
};

export default AWSLambda;
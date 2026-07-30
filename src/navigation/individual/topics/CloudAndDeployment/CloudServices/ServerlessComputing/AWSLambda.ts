import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/ServerlessComputing/AWSLambda/Advanced';

const AWSLambda: Subpage = {
    name: 'AWS Lambda',
    subpages: [
        Basics,
        Advanced
    ]
};

export default AWSLambda;
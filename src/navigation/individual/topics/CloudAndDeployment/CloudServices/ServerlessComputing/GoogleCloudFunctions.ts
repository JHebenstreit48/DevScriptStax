import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced';

const GoogleCloudFunctions: Subpage = {
    name: 'Google Cloud Functions',
    subpages: [
        Basics,
        Advanced
    ]
};

export default GoogleCloudFunctions;
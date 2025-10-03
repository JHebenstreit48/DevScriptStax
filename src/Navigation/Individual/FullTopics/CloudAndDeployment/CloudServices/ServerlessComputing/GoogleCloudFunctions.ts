import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced';

const GoogleCloudFunctions: Subpage = {
    name: 'Google Cloud Functions',
    subpages: [
        Basics,
        Advanced
    ]
};

export default GoogleCloudFunctions;
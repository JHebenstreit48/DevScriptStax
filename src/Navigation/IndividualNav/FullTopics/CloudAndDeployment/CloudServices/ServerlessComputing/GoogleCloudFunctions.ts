import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/GoogleCloudFunctions/Advanced';

const GoogleCloudFunctions: Subpage = {
    name: 'Google Cloud Functions',
    subpages: [
        Basics,
        Advanced
    ]
};

export default GoogleCloudFunctions;
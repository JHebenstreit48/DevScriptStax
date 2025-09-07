import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced';   

const FirebaseFunctions: Subpage = {
    name: 'Firebase Functions',
    subpages: [
        Basics,
        Advanced
    ]
};

export default FirebaseFunctions;
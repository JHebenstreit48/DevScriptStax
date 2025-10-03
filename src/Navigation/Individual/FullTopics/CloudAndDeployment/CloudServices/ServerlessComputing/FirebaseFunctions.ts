import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced';   

const FirebaseFunctions: Subpage = {
    name: 'Firebase Functions',
    subpages: [
        Basics,
        Advanced
    ]
};

export default FirebaseFunctions;
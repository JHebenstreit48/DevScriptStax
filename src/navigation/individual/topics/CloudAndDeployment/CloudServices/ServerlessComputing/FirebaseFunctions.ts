import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/ServerlessComputing/FirebaseFunctions/Advanced';   

const FirebaseFunctions: Subpage = {
    name: 'Firebase Functions',
    subpages: [
        Basics,
        Advanced
    ]
};

export default FirebaseFunctions;
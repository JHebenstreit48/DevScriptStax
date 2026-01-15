import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced';

const AzureFunctions: Subpage = {
    name: 'Azure Functions',
    subpages: [
        Basics,
        Advanced
    ]    
};

export default AzureFunctions;
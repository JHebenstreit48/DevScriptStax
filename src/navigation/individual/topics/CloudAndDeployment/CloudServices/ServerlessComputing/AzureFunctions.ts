import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced';

const AzureFunctions: Subpage = {
    name: 'Azure Functions',
    subpages: [
        Basics,
        Advanced
    ]    
};

export default AzureFunctions;
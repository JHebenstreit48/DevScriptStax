import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/ServerlessComputing/AzureFunctions/Advanced';

const AzureFunctions: Subpage = {
    name: 'Azure Functions',
    subpages: [
        Basics,
        Advanced
    ]    
};

export default AzureFunctions;
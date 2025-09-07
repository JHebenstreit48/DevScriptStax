import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced';

const ServerlessFramework: Subpage = {
    name: 'Serverless Framework',
    subpages: [
        Basics,
        Advanced
    ],
};

export default ServerlessFramework;
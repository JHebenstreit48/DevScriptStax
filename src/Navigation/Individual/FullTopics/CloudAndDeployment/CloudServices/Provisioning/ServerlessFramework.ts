import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced';

const ServerlessFramework: Subpage = {
    name: 'Serverless Framework',
    subpages: [
        Basics,
        Advanced
    ],
};

export default ServerlessFramework;
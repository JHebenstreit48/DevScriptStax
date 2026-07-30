import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework/Advanced';

const ServerlessFramework: Subpage = {
    name: 'Serverless Framework',
    subpages: [
        Basics,
        Advanced
    ],
};

export default ServerlessFramework;
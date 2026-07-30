import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced';

const AWSCDK: Subpage = {
    name: 'AWS CDK',
    subpages: [
        Basics,
        Advanced
    ],
};

export default AWSCDK;
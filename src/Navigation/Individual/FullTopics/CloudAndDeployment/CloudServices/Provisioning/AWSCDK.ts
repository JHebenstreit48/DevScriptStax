import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced';

const AWSCDK: Subpage = {
    name: 'AWS CDK',
    subpages: [
        Basics,
        Advanced
    ],
};

export default AWSCDK;
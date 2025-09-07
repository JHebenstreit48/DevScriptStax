import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/Provisioning/AWSCDK/Advanced';

const AWSCDK: Subpage = {
    name: 'AWS CDK',
    subpages: [
        Basics,
        Advanced
    ],
};

export default AWSCDK;
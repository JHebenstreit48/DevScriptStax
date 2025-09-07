import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced';

const AWSSAM: Subpage = {
    name: 'AWS SAM',
    subpages: [
        Basics,
        Advanced
    ],
};

export default AWSSAM;
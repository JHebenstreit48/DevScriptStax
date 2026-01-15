import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/Provisioning/AWSSAM/Advanced';

const AWSSAM: Subpage = {
    name: 'AWS SAM',
    subpages: [
        Basics,
        Advanced
    ],
};

export default AWSSAM;
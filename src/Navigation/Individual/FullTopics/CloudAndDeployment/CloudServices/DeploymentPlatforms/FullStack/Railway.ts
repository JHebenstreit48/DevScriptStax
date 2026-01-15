import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced';

const Railway: Subpage = {
  name: 'Railway',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Railway;
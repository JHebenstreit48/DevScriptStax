import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced';

const Railway: Subpage = {
  name: 'Railway',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Railway;
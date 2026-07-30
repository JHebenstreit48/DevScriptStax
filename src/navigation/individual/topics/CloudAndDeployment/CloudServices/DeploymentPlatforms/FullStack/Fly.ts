import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced';

const Fly: Subpage = {
  name: 'Fly',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Fly;
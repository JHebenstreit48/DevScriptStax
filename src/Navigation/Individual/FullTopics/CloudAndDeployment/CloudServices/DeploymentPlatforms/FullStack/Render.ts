import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced';

const Render: Subpage = {
  name: 'Render',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Render;
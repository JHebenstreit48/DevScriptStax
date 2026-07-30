import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Render/Advanced';

const Render: Subpage = {
  name: 'Render',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Render;
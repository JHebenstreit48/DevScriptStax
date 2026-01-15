import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Advanced';

const Vercel: Subpage = {
  name: 'Vercel',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Vercel;
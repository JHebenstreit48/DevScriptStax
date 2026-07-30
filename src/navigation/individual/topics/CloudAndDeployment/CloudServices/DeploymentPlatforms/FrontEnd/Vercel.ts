import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel/Advanced';

const Vercel: Subpage = {
  name: 'Vercel',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Vercel;
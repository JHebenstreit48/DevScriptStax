import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced';

const Netlify: Subpage = {
  name: 'Netlify',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Netlify;
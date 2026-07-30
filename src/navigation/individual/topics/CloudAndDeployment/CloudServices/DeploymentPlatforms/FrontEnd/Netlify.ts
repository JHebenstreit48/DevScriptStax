import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify/Advanced';

const Netlify: Subpage = {
  name: 'Netlify',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Netlify;
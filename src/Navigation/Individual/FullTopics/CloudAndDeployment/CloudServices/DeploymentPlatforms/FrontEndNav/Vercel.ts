import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/VercelNav/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/VercelNav/Advanced';

const Vercel: Subpage = {
  name: 'Vercel',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Vercel;
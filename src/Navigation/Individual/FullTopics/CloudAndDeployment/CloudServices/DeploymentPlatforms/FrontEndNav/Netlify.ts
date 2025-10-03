import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/NetlifyNav/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/NetlifyNav/Advanced';

const Netlify: Subpage = {
  name: 'Netlify',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Netlify;
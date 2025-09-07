import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/NetlifyNav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/NetlifyNav/Advanced';

const Netlify: Subpage = {
  name: 'Netlify',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Netlify;
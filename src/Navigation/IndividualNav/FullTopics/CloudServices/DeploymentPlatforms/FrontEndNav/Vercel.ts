import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudServices/DeploymentPlatforms/FrontEndNav/VercelNav/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudServices/DeploymentPlatforms/FrontEndNav/VercelNav/Advanced';

const Vercel: Subpage = {
  name: 'Vercel',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Vercel;
import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Railway/Advanced';

const Railway: Subpage = {
  name: 'Railway',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Railway;
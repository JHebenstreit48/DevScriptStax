import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced';

const Fly: Subpage = {
  name: 'Fly',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Fly;
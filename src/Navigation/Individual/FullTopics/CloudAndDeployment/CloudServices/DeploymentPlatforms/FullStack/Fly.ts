import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FullStack/Fly/Advanced';

const Fly: Subpage = {
  name: 'Fly',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Fly;
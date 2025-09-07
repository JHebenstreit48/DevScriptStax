import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/DeploymentPlatforms/FullStack/Render/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/DeploymentPlatforms/FullStack/Render/Advanced';

const Render: Subpage = {
  name: 'Render',
  subpages: [
    Basics,
    Advanced
  ]
};

export default Render;
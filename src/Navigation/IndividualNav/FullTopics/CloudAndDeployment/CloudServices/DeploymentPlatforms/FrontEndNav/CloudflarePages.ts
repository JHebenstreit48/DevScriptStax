import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import Basics from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/CloudflarePages/Basics';
import Advanced from '@/Navigation/IndividualNav/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/CloudflarePages/Advanced';

const ClouldflarePages: Subpage = {
  name: 'Cloudflare Pages',
  subpages: [
    Basics,
    Advanced
  ]
};

export default ClouldflarePages;
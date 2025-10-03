import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/CloudflarePages/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEndNav/CloudflarePages/Advanced';

const ClouldflarePages: Subpage = {
  name: 'Cloudflare Pages',
  subpages: [
    Basics,
    Advanced
  ]
};

export default ClouldflarePages;
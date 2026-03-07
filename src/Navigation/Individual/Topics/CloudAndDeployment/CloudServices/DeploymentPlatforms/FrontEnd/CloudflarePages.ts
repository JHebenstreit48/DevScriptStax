import type { Subpage } from '@/types/navigation';

import Basics from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics';
import Advanced from '@/Navigation/Individual/Granularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Advanced';

const ClouldflarePages: Subpage = {
  name: 'Cloudflare Pages',
  subpages: [
    Basics,
    Advanced
  ]
};

export default ClouldflarePages;
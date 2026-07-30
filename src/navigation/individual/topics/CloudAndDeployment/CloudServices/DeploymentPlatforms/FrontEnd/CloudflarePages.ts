import type { Subpage } from '@/types/navigation';

import Basics from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Basics';
import Advanced from '@/navigation/individual/modularized/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages/Advanced';

const ClouldflarePages: Subpage = {
  name: 'Cloudflare Pages',
  subpages: [
    Basics,
    Advanced
  ]
};

export default ClouldflarePages;
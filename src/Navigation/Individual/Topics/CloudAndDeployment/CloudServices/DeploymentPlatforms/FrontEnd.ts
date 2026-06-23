import type { Subpage } from '@/types/navigation';

import Netlify from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Netlify';
import Vercel from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/Vercel';
import CloudflarePages from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/DeploymentPlatforms/FrontEnd/CloudflarePages';

const FrontEnd: Subpage = {
  name: 'Front End',
  subpages: [
    Netlify,
    Vercel,
    CloudflarePages,
  ]
};

export default FrontEnd;
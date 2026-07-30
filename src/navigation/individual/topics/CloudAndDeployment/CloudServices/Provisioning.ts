import type { Subpage } from '@/types/navigation';

import ServerlessFramework from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework';
import AWSCDK from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/Provisioning/AWSCDK';
import AWSSAM from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudServices/Provisioning/AWSSAM';

const Provisioning: Subpage = {
  name: 'Provisioning',
  subpages: [
    ServerlessFramework,
    AWSCDK,
    AWSSAM,
  ]
};

export default Provisioning;
import type { Subpage } from '@/types/navigation';

import ServerlessFramework from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/Provisioning/ServerlessFramework';
import AWSCDK from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/Provisioning/AWSCDK';
import AWSSAM from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/Provisioning/AWSSAM';

const Provisioning: Subpage = {
  name: 'Provisioning',
  subpages: [
    ServerlessFramework,
    AWSCDK,
    AWSSAM,
  ]
};

export default Provisioning;
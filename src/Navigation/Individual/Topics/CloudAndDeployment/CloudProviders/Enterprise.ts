import type { Subpage } from '@/types/navigation';

import IBMCloud from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/Enterprise/IBMCloud';
import OracleCloud from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/Enterprise/OracleCloud';

const Enterprise: Subpage = {
  name: 'Enterprise',
  subpages: [
    IBMCloud,
    OracleCloud
  ]
};

export default Enterprise;
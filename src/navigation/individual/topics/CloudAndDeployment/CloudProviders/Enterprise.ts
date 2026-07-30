import type { Subpage } from '@/types/navigation';

import IBMCloud from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/Enterprise/IBMCloud';
import OracleCloud from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/Enterprise/OracleCloud';

const Enterprise: Subpage = {
  name: 'Enterprise',
  subpages: [
    IBMCloud,
    OracleCloud
  ]
};

export default Enterprise;
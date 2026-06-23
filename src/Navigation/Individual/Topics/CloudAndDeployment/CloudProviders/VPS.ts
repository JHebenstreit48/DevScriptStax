import type { Subpage } from '@/types/navigation';

import DigitalOcean from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/VPS/DigitalOcean';
import Linode from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/VPS/Linode';
import HetznerCloud from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/VPS/HetznerCloud';
import Scaleway from '@/Navigation/Individual/Topics/CloudAndDeployment/CloudProviders/VPS/Scaleway';

const VPS: Subpage = {
  name: 'VPS',
  subpages: [
    DigitalOcean,
    Linode,
    HetznerCloud,
    Scaleway
  ]
};

export default VPS;
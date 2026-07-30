import type { Subpage } from '@/types/navigation';

import DigitalOcean from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/VPS/DigitalOcean';
import Linode from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/VPS/Linode';
import HetznerCloud from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/VPS/HetznerCloud';
import Scaleway from '@/navigation/individual/topics/CloudAndDeployment/CloudProviders/VPS/Scaleway';

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
import type { Subpage } from '@/types/navigation';

import CloudflareWorkers from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/EdgeComputing/CloudflareWorkers';
import FastlyCompute from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/EdgeComputing/FastlyCompute';
import AkamaiEdgeWorkers from '@/navigation/individual/topics/CloudAndDeployment/CloudServices/EdgeComputing/AkamaiEdgeWorkers';

const EdgeComputing: Subpage = {
  name: 'Edge Computing',
  subpages: [
    CloudflareWorkers,
    FastlyCompute,
    AkamaiEdgeWorkers
  ]
};

export default EdgeComputing;
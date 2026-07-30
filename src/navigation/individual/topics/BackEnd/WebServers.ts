import type { Subpage } from '@/types/navigation';

import CoreConcepts from '@/navigation/individual/topics/BackEnd/WebServers/CoreConcepts';
import Nginx from '@/navigation/individual/topics/BackEnd/WebServers/Nginx';
import Apache from '@/navigation/individual/topics/BackEnd/WebServers/Apache';

const WebServers: Subpage = {
  name: 'Web Servers',
  subpages: [
    CoreConcepts,
    Nginx,
    Apache,
  ],
};

export default WebServers;
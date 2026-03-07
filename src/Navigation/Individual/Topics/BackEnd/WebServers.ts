import type { Subpage } from '@/types/navigation';

import CoreConcepts from '@/Navigation/Individual/Topics/BackEnd/WebServers/CoreConcepts';
import Nginx from '@/Navigation/Individual/Topics/BackEnd/WebServers/Nginx';
import Apache from '@/Navigation/Individual/Topics/BackEnd/WebServers/Apache';

const WebServers: Subpage = {
  name: 'Web Servers',
  subpages: [
    CoreConcepts,
    Nginx,
    Apache,
  ],
};

export default WebServers;
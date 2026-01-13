import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

import CoreConcepts from '@/Navigation/Individual/FullTopics/BackEnd/WebServers/CoreConcepts';
import Nginx from '@/Navigation/Individual/FullTopics/BackEnd/WebServers/Nginx';
import Apache from '@/Navigation/Individual/FullTopics/BackEnd/WebServers/Apache';


const WebServers: Subpage = {
  name: 'Web Servers',
  subpages: [
    CoreConcepts,
    Nginx,
    Apache,
  ],
};

export default WebServers;
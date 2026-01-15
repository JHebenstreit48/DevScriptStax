import type { Subpage } from '@/types/navigation';

import APIs from '@/Navigation/Individual/FullTopics/BackEnd/APIs';
import AuthenticationAuthorization from '@/Navigation/Individual/FullTopics/BackEnd/AA';
import Databases from '@/Navigation/Individual/FullTopics/BackEnd/Databases';
import Frameworks from '@/Navigation/Individual/FullTopics/BackEnd/Frameworks';
import WebServers from '@/Navigation/Individual/FullTopics/BackEnd/WebServers';
const backEnd: Subpage = {
  name: 'Back End',
  subpages: [
    APIs,
    AuthenticationAuthorization,
    Databases,
    Frameworks,
    WebServers,
  ]
};

export default backEnd;
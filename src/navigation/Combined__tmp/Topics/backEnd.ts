import type { Subpage } from '@/types/navigation';

import APIs from '@/Navigation/Individual/Topics/BackEnd/APIs';
import AuthenticationAuthorization from '@/Navigation/Individual/Topics/BackEnd/AA';
import Databases from '@/Navigation/Individual/Topics/BackEnd/Databases';
import Frameworks from '@/Navigation/Individual/Topics/BackEnd/Frameworks';
import WebServers from '@/Navigation/Individual/Topics/BackEnd/WebServers';
const backEnd: Subpage = {
  name: 'Backend',
  subpages: [
    APIs,
    AuthenticationAuthorization,
    Databases,
    Frameworks,
    WebServers,
  ]
};

export default backEnd;
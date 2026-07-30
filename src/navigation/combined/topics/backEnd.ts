import type { Subpage } from '@/types/navigation';

import APIs from '@/navigation/individual/topics/BackEnd/APIs';
import AuthenticationAuthorization from '@/navigation/individual/topics/BackEnd/AA';
import Databases from '@/navigation/individual/topics/BackEnd/Databases';
import Frameworks from '@/navigation/individual/topics/BackEnd/Frameworks';
import WebServers from '@/navigation/individual/topics/BackEnd/WebServers';
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
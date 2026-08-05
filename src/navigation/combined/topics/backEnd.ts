import type { Subpage } from '@/types/navigation';

import APIs from '@/navigation/individual/topics/BackEnd/APIs';
import AuthenticationAuthorization from '@/navigation/individual/topics/BackEnd/AA';
import Databases from '@/navigation/individual/topics/BackEnd/Databases';
import Frameworks from '@/navigation/individual/topics/BackEnd/Frameworks';
import WebServers from '@/navigation/individual/topics/BackEnd/WebServers';
// import GraphQLAndApollo from '@/navigation/individual/topics/BackEnd/GraphQLAndApollo';
// import Stacks from '@/navigation/individual/topics/BackEnd/Stacks';

const backEnd: Subpage = {
  name: 'Back End',
  subpages: [
    APIs,
    AuthenticationAuthorization,
    Databases,
    Frameworks,
    WebServers,
    // GraphQLAndApollo
  ]
};

export default backEnd;
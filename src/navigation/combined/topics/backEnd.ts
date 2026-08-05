import type { Subpage } from '@/types/navigation';

import APIs from '@/navigation/individual/topics/BackEnd/APIs';
import AuthenticationAuthorization from '@/navigation/individual/topics/BackEnd/AA';
import Databases from '@/navigation/individual/topics/BackEnd/Databases';
import Frameworks from '@/navigation/individual/topics/BackEnd/Frameworks';
import WebServers from '@/navigation/individual/topics/BackEnd/WebServers';
import GraphQLAndApollo from '@/navigation/individual/topics/BackEnd/graphQLAndApollo';
import Stacks from '@/navigation/individual/topics/BackEnd/stacks';

const backEnd: Subpage = {
  name: 'Back End',
  subpages: [
    APIs,
    AuthenticationAuthorization,
    Databases,
    Frameworks,
    WebServers,
    GraphQLAndApollo,
    Stacks
  ]
};

export default backEnd;
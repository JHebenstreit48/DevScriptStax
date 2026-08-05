import type { Subpage } from '@/types/navigation';

import ClientBasics from '@/navigation/individual/modularized/BackEnd/GraphQLAndApollo/Apollo/ApolloClient/Basics';
import ClientAdvanced from '@/navigation/individual/modularized/BackEnd/GraphQLAndApollo/Apollo/ApolloClient/Advanced';

import ServerBasics from '@/navigation/individual/modularized/BackEnd/GraphQLAndApollo/Apollo/ApolloServer/Basics';
import ServerAdvanced from '@/navigation/individual/modularized/BackEnd/GraphQLAndApollo/Apollo/ApolloServer/Advanced';

const Apollo: Subpage = {
  name: 'Apollo',
  subpages: [
    {
      name: 'Apollo Client',
      subpages: [
        ClientBasics,
        ClientAdvanced
      ]
    },
    {
      name: 'Apollo Server',
      subpages: [
        ServerBasics,
        ServerAdvanced
      ]
    }
  ]
};

export default Apollo;
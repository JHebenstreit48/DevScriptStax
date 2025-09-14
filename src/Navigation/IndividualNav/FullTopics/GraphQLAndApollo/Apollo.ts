import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ClientBasics from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/Apollo/ApolloClient/Basics';
import ClientAdvanced from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/Apollo/ApolloClient/Advanced';

import ServerBasics from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/Apollo/ApolloServer/Basics';
import ServerAdvanced from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/Apollo/ApolloServer/Advanced';

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
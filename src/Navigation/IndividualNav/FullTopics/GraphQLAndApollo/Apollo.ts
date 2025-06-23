import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import ApolloClientBasics from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/ApolloNav/ApolloClient/Basics';
import ApolloClientAdvanced from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/ApolloNav/ApolloClient/Advanced';

import ApolloServerBasics from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/ApolloNav/ApolloServer/Basics';
import ApolloServerAdvanced from '@/Navigation/IndividualNav/Granularized/GraphQLAndApollo/ApolloNav/ApolloServer/Advanced';

const ApolloNav: Subpage = {
  name: 'Apollo',
  subpages: [
    {
      name: 'Apollo Client',
      subpages: [
        ApolloClientBasics,
        ApolloClientAdvanced
      ]
    },
    {
      name: 'Apollo Server',
      subpages: [
        ApolloServerBasics,
        ApolloServerAdvanced
      ]
    }
  ]
};

export default ApolloNav;

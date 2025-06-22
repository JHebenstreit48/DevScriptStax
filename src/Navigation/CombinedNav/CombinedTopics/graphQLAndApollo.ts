import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import GraphQLNav from '@/Navigation/IndividualNav/GraphQLAndApollo/GraphQL';
import ApolloNav from '@/Navigation/IndividualNav/GraphQLAndApollo/Apollo';

const graphQLAndApollo: Subpage = {
  name: 'GraphQL & Apollo',
  subpages: [GraphQLNav, ApolloNav]
};

export default graphQLAndApollo;

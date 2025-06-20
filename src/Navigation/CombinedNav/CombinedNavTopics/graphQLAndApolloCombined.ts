import { Page } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

import GraphQLNav from '@/Navigation/IndividualNav/GraphQLAndApollo/GraphQL';
import ApolloNav from '@/Navigation/IndividualNav/GraphQLAndApollo/Apollo';

const graphQLAndApolloNav: Page = {
  name: 'GraphQL & Apollo',
  subpages: [GraphQLNav, ApolloNav]
};

export default graphQLAndApolloNav;
